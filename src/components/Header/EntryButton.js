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
          {(
              <li>
                <a href="/wasteeliminator/about">About Us</a>
              </li>
            )}
            {(
              <li>
                <a href="/wasteeliminator/alert">Alert</a>
              </li>
            )}
            {props.token && (
              <li>
                <a href="/wasteeliminator/home">Home</a>
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
                  <button onClick={props.onLogin}>Login</button> 
              </li>
            )}
          </ul>
        </nav>
    )
}

export default EntryButton;