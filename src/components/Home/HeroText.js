import Button from '../UI/Button/Button';
import classes from './HeroText.module.css';

const subtext = "Waste Eliminator is simple web application where anyone can make an alert of uncontrolled waste by uploading image and location.";

const HeroText = (props) => {
    return (
        <div className={classes.herotext}>
            <h1>Waste Eliminator</h1>
            <p>{subtext}</p>
            <Button onClick={props.onShowSignup}>Getting Start</Button>
        </div>
    )
};

export default HeroText;