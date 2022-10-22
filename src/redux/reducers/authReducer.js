import {authAPI} from "../../assets/api";

const SET_USER = 'authReducer/set_auth';
const DEL_USER = 'authReducer/del_auth';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        case DEL_USER:
            debugger;
            return {
                userId: null,
                email: null,
                login: null,
                isAuth: false,
            }
        default:
            return state;
    }
}

export const setUser = (userId, email, login) => ({type: SET_USER, userId, email, login});
export const delUser = () => ({type: DEL_USER})

export const authMe = () => async dispatch => {
    const resp = await authAPI.getMe();
    
    if(resp.data.resultCode === 0){
        dispatch(setUser(resp.data.data.id, resp.data.data.email, resp.data.data.login));
    }

    return resp;
}

export const login = (email, password, rememberMe, setStatus) => async dispatch => {
        const resp = await authAPI.login(email, password, rememberMe);
        
        if(resp.data.resultCode === 0) {
            authAPI.getMe()
            .then(resp => {
                if(resp.data.resultCode === 0){
                    dispatch(setUser(resp.data.data.id, resp.data.data.email, resp.data.data.login));
                }
            })
        }
        else {
            setStatus('Something went wrong');
        }

        return resp;
}

export const logout = () => async dispatch => {
    const resp = await authAPI.logout();

    if(resp.data.resultCode === 0) {
        dispatch(delUser());
    }
}


export default authReducer;