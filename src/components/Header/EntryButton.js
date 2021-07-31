import Button from "../UI/Button/Button";
import classes from "./EntryButton.module.css";
import { Link } from "react-router-dom";

const EntryButton = (props) => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    props.setToken(null);
  };

  return (
    <nav className={classes.nav}>
      <ul>
        {
          <li>
            <Link to={"/about"}>
              <p> About Us </p>
            </Link>
          </li>
        }
        {
          <li>
            <Link to={"/alert"}>
              <p> Waste Alert </p>
            </Link>
          </li>
        }
        {
          <li>
            <Link to={"/home"}>
              <p>Home</p>
            </Link>
          </li>
        }
        {props.token && (
          <li>
            <Button onClick={logoutHandler}>Logout</Button>
          </li>
        )}
        {!props.token && (
          <li>
            <Button onClick={props.onSignup}>Signup</Button>
          </li>
        )}
        {!props.token && (
          <li>
            <button onClick={props.onLogin}>Login</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default EntryButton;
