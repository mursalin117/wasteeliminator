import Button from '../UI/Button/Button';
import classes from './HeroText.module.css';

const HeroText = (props) => {
    return (
        <div className={classes.herotext}>
            <h1>Waste Eliminator</h1>
            <p>a web-based cross platform where anyone can easily highlight social or environment issues around them to the proper administration.</p>
            <Button onClick={props.onShowSignup}>Getting Start</Button>
        </div>
    )
};

export default HeroText;