import withAuthRedirect from "../HOC/withAuthRedirect";
import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";

const MessagesContainer = (props) => {
    return <Messages/>
}


export default compose(connect(), withAuthRedirect)(MessagesContainer)