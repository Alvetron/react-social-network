import ChatMessage from "./ChatMessage/ChatMessage";

const ChatMessageList = ({messages}) => {
    return (
        <ul className='flex flex-col'>
            {messages.map( item => <ChatMessage amIsender={item.amIsender} message={item.message}/>)}
        </ul>
    )
}

export default ChatMessageList;