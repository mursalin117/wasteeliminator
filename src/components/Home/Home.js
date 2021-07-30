import Map from "../Map/Map";
import HeroText from "./HeroText";
import classes from "./Home.module.css";
import Signup from "../EntryForm/Signup";
import Login from "../EntryForm/Login";
import Card from "../UI/Card/Card";
import vision from "../../photos/7.jpg";
import profile from "../../photos/4.jpg";
import Button from "../UI/Button/Button";
import faqImage from '../../photos/faq.png';
import Faq from "../Pages/FAQ";
const Home = (props) => {

  const submitUserHandler = async (payload) => {
    console.log(JSON.stringify(payload));
    const response = await fetch("https://waste-eliminator-api.us-south.cf.appdomain.cloud/users", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json' 
      }
    })

    try{
      const data = await response.json();
      props.setToken(data.token);
    }catch(err) {
      console.log(err);
    }

  }

  const loginUserHandler = async(payload) => {
    const response = await fetch("https://waste-eliminator-api.us-south.cf.appdomain.cloud/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json' 
      }
    })
    try {
      const data = await response.json();
      props.setToken(data.token);
    } catch(err) {
      console.log(err);
    }
  }

  const signupScreen = props.signupIsShown && (
    <Signup
      onConfirm={submitUserHandler}
      onShowLogin={props.showLoginHandler}
      onClose={props.hideEntryFormHandler}
    />
  );

  const loginScreen = props.loginIsShown && (
    <Login
    onConfirm={loginUserHandler}
      onShowSignup={props.showSignupHandler}
      onClose={props.hideEntryFormHandler}
    />
  );

  const whoWeAre = (
    <Card className={classes.profile}>
      <div>
        <img src={profile} height="192px" width="192px" alt="1"/>
        <h1>Md. Abdullah Al Mamun</h1>
        <p>Student, CSE, University of Rajshahi</p>
      </div>
      <div>
        <img src={profile} height="192px" width="192px" alt="2"/>
        <h1>Md. Al Shahria</h1>
        <p>Student, CSE, University of Rajshahi</p>
      </div>
      <div>
        <img src={profile} height="192px" width="192px" alt="3"/>
        <h1>M.M Mursalin Chowdhury</h1>
        <p>Student, CSE, University of Rajshahi</p>
      </div>
    </Card>
  );

  const Vision = (
    <Card className={classes.vision}>
      <img src={vision} height="200px" width="300px" alt="4"/>
      <div>
        <h1>Vision</h1>
        <p>
          We have a vision but the truth is we want money. Everywhere money
          matters at the end. But Here only you will add photo because you care
          about environment.
        </p>
        <Button>Learn More</Button>
      </div>
    </Card>
  );

  return (
    <div className={classes.home}>
      <Map height="100%" width="100%" />
      <HeroText onShowSignup={props.showSignupHandler} />
      {signupScreen}
      {loginScreen}
      {Vision}
      <Card>
        <h1>Add an alert</h1>
        <Button>Post Now</Button>
      </Card>
      <Card className={classes.faq}>
        <img src={faqImage} height="250px" width="450px" alt="faq"/>
        <Faq />
      </Card>
      <h1 className={classes.h1}>Who We are?</h1>
      {whoWeAre}
    </div>
  );
};

export default Home;
