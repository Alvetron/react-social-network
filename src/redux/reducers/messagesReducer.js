const SEND_MESSAGE = 'messagesReducer/SEND_MESSAGE';

const initialState = {
    messageList: [
        {
            id: 1,
            name: 'Andrii Kyryliuk'
        },
        {
            id: 2,
            name: 'Pablo Sokolovsky'
        },
        {
            id: 3,
            name: 'Pablo Escobaro'
        },
        {
            id: 4,
            name: 'Adam Benladen'
        },
        {
            id: 5,
            name: 'Ihor Vaka'
        },
    ],
    messageInput: 'Hello, everyone',
    chatMessages: [
        {
            message: 'YOOOO',
            amIsender: true
        },
        {
            message: 'three to the three',
            amIsender: false
        },
        {
            message: 'What up?',
            amIsender: true,
        },
    ],
};



const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                chatMessages: [...state.chatMessages, {message: state.messageInput, amIsender: true}],
                messageInput: '',
            }
        default:
            return state;
    }
}

export const setSentMessage = () => ({type: SEND_MESSAGE});


export default messagesReducer;