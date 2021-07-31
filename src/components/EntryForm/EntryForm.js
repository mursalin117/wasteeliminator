import { Fragment } from "react";
import Login from "./Login";
import Signup from "./Signup";
const EntryForm = (props) => {
  const submitUserHandler = async (payload) => {
    console.log(JSON.stringify(payload));
    const response = await fetch(
      "https://waste-eliminator-api.us-south.cf.appdomain.cloud/users",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      const data = await response.json();
      props.setToken(data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const loginUserHandler = async (payload) => {
    const response = await fetch(
      "https://waste-eliminator-api.us-south.cf.appdomain.cloud/users/login",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    try {
      const data = await response.json();
      props.setToken(data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const signupScreen = props.signupIsShown && (
    <Signup
      onConfirm={submitUserHandler}
      onShowLogin={props.showLoginHandler}
      onClose={props.hideEntryFormHandler}
    />
  );

  const loginScreen = props.loginIsShown && (
    <Login
      onConfirm={loginUserHandler}
      onShowSignup={props.showSignupHandler}
      onClose={props.hideEntryFormHandler}
    />
  );

  return (
    <Fragment>
      {signupScreen}
      {loginScreen}
    </Fragment>
  );
};

export default EntryForm;
