import classes from './AboutUs.module.css';
import Button from '../UI/Button/Button';

const Profile = (props) => {
    return (
        <div className={classes.profilediv}>
        <img src={props.photo} height="192px" width="192px" alt={props.alt} />
        <h1>{props.name}</h1>
        <p>{props.status}</p>
        <a href={props.link}><Button>LinkedIn</Button></a>
      </div>
    )
};

export default Profile;