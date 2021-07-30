import classes from './PostCard.module.css';

const PostCard = (props) => {
    return <div className={`${classes.postcard} ${props.className}`}>{props.children}</div>
}
export default PostCard;