import { useRef, useReducer, useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import classes from "./Input.module.css";

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

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);


  const emailRef = useRef();
  const passwordRef = useRef();

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const slideHandler = () => {
    props.onClose();
    props.onShowSignup();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      const payload = {email: emailState.value, password: passwordState.value}

      props.onConfirm(payload)

    } else if (!emailIsValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }

    // const enteredEmail = emailRef.current.value;
    // const enteredPassword = passwordRef.current.value;

    // console.log(enteredEmail, enteredPassword);

    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler} className={classes.body}>
        <h3>Sign In to Waste Eliminator</h3>
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
        <Button type="submit">Login</Button>
        <div className={classes.changeForm}>
          <p>Not a registered user?</p>
          <button onClick={slideHandler}>Go to Signup</button>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
