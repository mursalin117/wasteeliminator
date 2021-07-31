import { useReducer, useRef, useState, useEffect } from 'react';

import Button from "../UI/Button/Button";
import classes from "./Input.module.css";

const regName = /^[a-zA-Z]+$/;

const nameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: regName.test(action.val) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: regName.test(action.val) };
  }
  return { value: "", isValid: false };
};

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const messageReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 20 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 20 };
  }
  return { value: "", isValid: false };
};


const ContactForm = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: false
  })

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [messageState, dispatchMessage] = useReducer(messageReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: nameIsValid } = nameState;
  const { isValid: emailIsValid } = emailState;
  const { isValid: messageIsValid } = messageState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(nameIsValid && emailIsValid && messageIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [nameIsValid, emailIsValid, messageIsValid]);

  const nameChangeHandler = (event) => {
    dispatchName({ type: "USER_INPUT", val: event.target.value });
  }

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const messageChangeHandler = (event) => {
    dispatchMessage({ type: "USER_INPUT", val: event.target.value });
  };

  const validateNameHandler = () => {
    dispatchName({ type: "INPUT_BLUR" });
  }

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validateMessageHandler = () => {
    dispatchMessage({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      const payload = {
        name: nameState.value,
        email: emailState.value,
        message: messageState.value
      }
      
      console.log(payload);



    } else if(!nameIsValid) {
      nameRef.current.focus();
    } else if (!emailIsValid) {
      emailRef.current.focus();
    } else {
      messageRef.current.focus();
    }

  };

  return (
      <form onSubmit={submitHandler} className={classes.body}>
        <h1>Contact Us</h1>
        <div className={classes.input}>
          <label>Name</label>
          <input
            ref={nameRef}
            id="name"
            label="Name"
            type="text"
            value={nameState.value}
            onChange={nameChangeHandler}
            onBlur={validateNameHandler}
          />
        </div>
        <div className={classes.input}>
          <label>Email</label>
          <input
            ref={emailRef}
            id="email"
            label="E-mail"
            type="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={classes.message}>
          <label>Message</label>
          <input
            ref={messageRef}
            id="message"
            label="message"
            type="text"
            value={messageState.value}
            onChange={messageChangeHandler}
            onBlur={validateMessageHandler}
          />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
  );
};

export default ContactForm;
