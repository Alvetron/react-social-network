import MessagesListItem from "./MessageListItem/MessageListItem";

const MessagesList = ({messageList}) => {
    return (

        <ul className='mr-10 '>
            {messageList.map(item => <MessagesListItem key={item.id} id={item.id} name={item.name}/>)}
        </ul>
    )
}

export default MessagesList;