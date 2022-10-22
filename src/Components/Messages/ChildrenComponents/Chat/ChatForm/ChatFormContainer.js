import ChatForm from "./ChatForm";
import {connect} from "react-redux";
import {setSentMessage} from "../../../../../redux/reducers/messagesReducer";

const ChatFormContainer = (props) => {
    return (
        <ChatForm startMessage={props.messageInputText}/>
    );
};

const mapStateToProps = (state) => ({messageInputText: state.messages.messageInput});

const mapDispatchToProps = (dispatch) => ({
    setSentMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatFormContainer);