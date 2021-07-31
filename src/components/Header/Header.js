import classes from "./Header.module.css";
import EntryButton from "./EntryButton";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <a style={{color: "white"}} href="/"><h1>Waste Eliminator</h1></a>
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
