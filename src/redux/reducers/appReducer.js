const SET_INITIALIZATION = 'appReducer/set_initialization';

const initialState = {
    initialized: false,
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const setInitialization = () => ({type: SET_INITIALIZATION})


export default appReducer;