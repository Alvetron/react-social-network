import ChatFormContainer from "./ChatForm/ChatFormContainer";
import ChatMessageListContainer from "./ChatMessageList/ChatMessageListContainer";

const Chat = (props) => {
    return (
        <div className='w-full bg-slate-100'>
            <div className='flex flex-col w-full p-3'>
                <ChatMessageListContainer/>
            </div>
            <ChatFormContainer />
        </div>
    )
}

export default Chat;