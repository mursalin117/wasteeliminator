import Modal from "../UI/Modal/Modal"
import Login from "./Login"
import Signup from "./Signup";


const EntryForm = props => {
    console.log(props.loginStatus, props.signupStatus);
    return (
        <Modal onClose={props.onClose}>
            {props.signupStatus && <Signup />}
            {props.loginStatus && <Login />}
        </Modal>
    )
}

export default EntryForm;