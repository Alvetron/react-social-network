const MessagesListItem = ({name}) => {
    return (
        <li className='my-2 last:mb-0 last:mt-0'>
            <a href='#' className='block w-44 px-2 py-3 bg-slate-100 transition-colors duration-75 hover:bg-slate-200'>
                {name}
            </a>
        </li>
    )
}

export default MessagesListItem;