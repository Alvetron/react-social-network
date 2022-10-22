const ChatForm = (props) => {
    return (
        <form className='flex bg-white'>
            <textarea className='w-10/12 p-3 border-4 border-black-100  focus:outline-none resize-none'
                   name='messageBody' placeholder="Your message"></textarea>
            <button className='w-2/12 border-y-4 border-r-4 border-black-100 hover:text-black/50' type="submit">Send
            </button>
        </form>
    );
};

export default ChatForm;