import Map from "../Map/Map";
import HeroText from "./HeroText";
import classes from "./Home.module.css";
import Card from "../UI/Card/Card";
import vision from "../../photos/7.jpg";
import Button from "../UI/Button/Button";
import faqImage from "../../photos/faq.png";
import addAlert from "../../photos/waste.jpg";
import Faq from "../Pages/FAQ";
import { Link } from 'react-router-dom';
import ContactForm from "../Pages/ContactForm";
const Home = (props) => {



  const Vision = (
    <Card className={classes.vision}>
      <div>
        <h1>VISION</h1>
        <p>
          We all want a waste free planet but very few are taking actions to
          keep it clean. With your help we plan to achieve this goal. Be a part
          of the solution, not part of the pollution.
        </p>
        <Button>Learn More</Button>
      </div>
      <img src={vision} height="300px" width="300px" alt="4" />
    </Card>
  );

  return (
    <div className={classes.home}>
      <Map height="100%" width="100%" />
      <HeroText onShowSignup={props.showSignupHandler} />
      {Vision}
      <Card className={classes.addAlert}>
        <img
          src={addAlert}
          height="300px"
          width="300px"
          alt="add an waste alert"
        />
        <div>
          <h1>Add an alert</h1>
          <p>Add photo and location of waste around you.</p>
          <Link to="/alert"><Button className={classes.button}><span className={classes.add}>+  Post Now</span></Button></Link>
        </div>
      </Card>
      <Card className={classes.faq}>
        <Faq />
        <img src={faqImage} height="250px" width="450px" alt="faq" />
      </Card>
      <Card className={classes.contact}>
        <ContactForm />
      </Card>
    </div>
  );
};

export default Home;
