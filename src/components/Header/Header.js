import classes from "./Header.module.css";
import EntryButton from "./EntryButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Link to="/home"><h1>Waste Eliminator</h1></Link>

      <EntryButton
        token={props.token}
        setToken={props.setToken}
        onLogin={props.onShowLogin}
        onSignup={props.onShowSignup}
      />
    </header>
  );
};

export default Header;
