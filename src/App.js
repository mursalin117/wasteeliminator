import { useState } from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Fragment } from "react";
import useToken from "./components/Hooks/useToken";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./components/Pages/AboutUs";
import Alert from "./components/Alert/Alert";


function App() {
  const [loginIsShown, setLoginIsShown] = useState(false);
  const [signupIsShown, setSignupIsShown] = useState(false);


  const { token, setToken } = useToken();


  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const hideEntryFormHandler = () => {
    setLoginIsShown(false);
    setSignupIsShown(false);
  };
  const showSignupHandler = () => {
    setSignupIsShown(true);
  };



  return (
    <Fragment>
      <Header
        token={token}
        setToken={setToken}
        onShowLogin={showLoginHandler}
        onShowSignup={showSignupHandler}
      />

      <BrowserRouter>
        <Switch>
          {token && (
            <Route path="/about">
              <AboutUs />
            </Route>
          )}

          {token && (
            <Route path="/alert">
                <Alert token={token} />
            </Route>
          )}

          <Route path="/">
            <Home
              setToken={setToken}
              showLoginHandler={showLoginHandler}
              showSignupHandler={showSignupHandler}
              hideEntryFormHandler={hideEntryFormHandler}
              loginIsShown={loginIsShown}
              signupIsShown={signupIsShown}
            />
          </Route>
        </Switch>
      </BrowserRouter>

      {false && (
        <Fragment>
          {/* {signupIsShown && (
            <Signup
              onShowLogin={showLoginHandler}
              onClose={hideEntryFormHandler}
            />
          )}

          {!ctx.isLoggedIn && loginIsShown && (
            <Login
              onShowSignup={showSignupHandler}
              onClose={hideEntryFormHandler}
            />
          )} */}
        </Fragment>
      )}
    </Fragment>
  );
}

export default App;
