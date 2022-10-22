import MessageList from "./MessageList";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    messageList: state.messages.messageList
});

export default connect(mapStateToProps)(MessageList);