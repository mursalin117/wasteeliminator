import { useReducer, useRef, useState, useEffect } from 'react';

import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
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

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};


const Signup = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: false
  })

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: nameIsValid } = nameState;
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(nameIsValid && emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [nameIsValid, emailIsValid, passwordIsValid]);

  const nameChangeHandler = (event) => {
    dispatchName({ type: "USER_INPUT", val: event.target.value });
  }

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateNameHandler = () => {
    dispatchName({ type: "INPUT_BLUR" });
  }

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };


  const slideHandler = () => {
    props.onClose();
    props.onShowLogin();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      const payload = {
        name: nameState.value,
        email: emailState.value,
        password: passwordState.value
      }
      
      props.onConfirm(payload);



    } else if(!nameIsValid) {
      nameRef.current.focus();
    } else if (!emailIsValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }

    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler} className={classes.body}>
        <h2>Join Waste Eliminator</h2>
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
        <div className={classes.input}>
          <label>Password</label>
          <input
            ref={passwordRef}
            id="password"
            label="Password"
            type="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <Button type="submit">Signup</Button>
        <div className={classes.changeForm}>
          <p>Already signup?</p>
          <button onClick={slideHandler}>Go to Login</button>
        </div>
      </form>
    </Modal>
  );
};

export default Signup;
