import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <li className={classes.post}>
      <div>
        <h1>Nilphamari</h1>
        <h2>{props.wasteType}</h2>
        <div>
          <p>{props.lat}</p>
          <p>{props.long}</p>
        </div>
        <div className={classes.div}>
          <img src={props.image} alt="react"/>
        </div>
      </div>
    </li>
  );
};

export default Post;
