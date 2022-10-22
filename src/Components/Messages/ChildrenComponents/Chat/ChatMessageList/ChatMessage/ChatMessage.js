const ChatMessage = ({amIsender, message}) => {
    const sender = amIsender ? 'ml-auto' : 'mr-auto';
    return (
        <div className={`bg-white my-3 mx-2 py-3 px-5 rounded-2xl
        ${sender}`}>{message}</div>
    )
}

export default ChatMessage;