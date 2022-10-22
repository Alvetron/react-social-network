import ChatMessageList from "./ChatMessageList";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({messages: state.messages.chatMessages});

const ChatMessageListContainer = connect(mapStateToProps)(ChatMessageList)

export default ChatMessageListContainer;