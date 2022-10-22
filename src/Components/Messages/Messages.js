import Chat from "./ChildrenComponents/Chat/Chat";
import MessagesListItemContainer from "./ChildrenComponents/MessageList/MessageListContainer";

const Messages = (props) => {
    return (
        <div className='py-5 px-4'>
                <h1>Messages</h1>
                <div className='flex'>
                    <MessagesListItemContainer/>
                    <Chat/>
                </div>
        </div>

    );
};

export default Messages;