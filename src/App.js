import { useState } from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Fragment } from "react";
import useToken from "./components/Hooks/useToken";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./components/Pages/AboutUs";
import Alert from "./components/Alert/Alert";
import EntryForm from "./components/EntryForm/EntryForm";


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
      <EntryForm
        setToken={setToken}
        showLoginHandler={showLoginHandler}
        showSignupHandler={showSignupHandler}
        hideEntryFormHandler={hideEntryFormHandler}
        loginIsShown={loginIsShown}
        signupIsShown={signupIsShown}
      />
      <BrowserRouter>
        <Switch>
          {(
            <Route path="/wasteeliminator/about">
              <AboutUs />
            </Route>
          )}

          {(
            <Route path="/wasteeliminator/alert">
                <Alert token={token} />
            </Route>
          )}

          <Route path="/wasteeliminator">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>

      {false && (
        <Fragment>
        </Fragment>
      )}
    </Fragment>
  );
}

export default App;
