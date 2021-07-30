import Button from '../UI/Button/Button';
import classes from './EntryButton.module.css';

const EntryButton = (props) => {


  const logoutHandler = () => {
    localStorage.removeItem('token');
    props.setToken(null);
  }

    return (
        <nav className={classes.nav}>
          <ul>
          {props.token && (
              <li>
                <a href="/about">About Us</a>
              </li>
            )}
            {props.token && (
              <li>
                <a href="/alert">Alert</a>
              </li>
            )}
            {props.token && (
              <li>
                <a href="/home">Home</a>
              </li>
            )}
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
                  <Button onClick={props.onLogin}>Login</Button> 
              </li>
            )}
          </ul>
        </nav>
    )
}

export default EntryButton;