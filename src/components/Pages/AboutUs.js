import Card from "../UI/Card/Card";
import mProfile from "../../photos/ProfilePic.jpg";
import mmProfile from "../../photos/mursalin.jpg";
import sProfile from "../../photos/shahriar.jpg";
import classes from "./AboutUs.module.css";
import Profile from "./profile";
const AboutUs = () => {
  const whoWeAre = (
    <Card className={classes.profile}>
      <Profile
        name="Md. Abdullah Al Mamun"
        status="Student, CSE, University of Rajshahi"
        photo={mProfile}
        link="https://www.linkedin.com/in/mamuncseru/"
      />
      <Profile
        name="Md. Al Shahria"
        status="Student, CSE, University of Rajshahi"
        photo={sProfile}
        link="https://www.linkedin.com/in/mamuncseru/"
      />
      <Profile
        name="M.M Mursalin Chowdhury"
        status="Student, CSE, University of Rajshahi"
        photo={mmProfile}
        link="https://www.linkedin.com/in/m-m-mursalin-chowdhury-5bb40b181/"
      />
    </Card>
  );

  return (
    <div className={classes.about}>
      <h1 className={classes.h1}>Who We are?</h1>
      {whoWeAre}
    </div>
  );
};

export default AboutUs;
