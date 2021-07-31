import classes from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={classes.post}>
      <div>
        <p>WasteType - {props.wasteType}</p>
        <p>Location: {props.lat} {props.long}</p>
      </div>
      <img className={classes.img} src={props.image} alt={`${props.wasteType}waste`}/>
    </div>
  );
};

export default Post;
