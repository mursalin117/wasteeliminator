import classes from "./Header.module.css";
import EntryButton from "./EntryButton";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Waste Eliminator</h1>
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
