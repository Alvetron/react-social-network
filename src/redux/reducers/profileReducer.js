import {profileAPI} from "../../assets/api";

const SET_USER = 'profileReducer/set_user';
const SET_STATUS = 'profileReducer/set_status';
const UPDATE_STATUS = 'profileReducer/update_status';
const ADD_POST = 'profileReducer/app_post';
const DELETE_POST = 'profileReducer/delete_post';


const initialState = {
    posts: [
        {
            id: 1,
            text: 'YO, YO, YO, one four eight three to the three to the six the nine. Present the ABQ. What up BEAATCH',
        },
        {
            id: 2,
            text: 'SIUUUUUUU',
        },
        {
            id: 3,
            text: 'Tommow in the central park at 12:00 guys',
        },
    ],
    user: undefined,
    status: ''
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case SET_STATUS:
        return {
            ...state,
            status: action.status
        };
        case UPDATE_STATUS:
        return {
            ...state,
            status: action.status
        };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {text: action.postBody} ]
            }
        case DELETE_POST: 
            return {
                ...state,
                posts: state.posts.filter(post => {
                    if(post.id !== action.id) return true
                })
            }
        default: {
            return state;
        }
    }
};

export const setUser = user => ({type: SET_USER, user});
export const setStatus = status => ({type: SET_STATUS, status});
export const setUpdatedStatus = status => ({type: UPDATE_STATUS, status});
export const addNewPost = postBody => ({type: ADD_POST, postBody});
export const deletePost = id => ({type: DELETE_POST, id});

export const getUser = userid => dispatch => {
    profileAPI.getProfileUser(userid)
        .then(resp => {
            dispatch(setUser(resp.data));
        })
};

export const getStatus = userId => async dispatch => {
    const resp = await profileAPI.getProfileStatus(userId);

    let text = resp.data ? resp.data : '';
    dispatch(setStatus(text));
};

export const updateStatus = statusText => async dispatch => {
    const resp =  await profileAPI.updateProfileStatus(statusText);
    
    if(resp.data.resultCode === 0) {
        dispatch(setUpdatedStatus(statusText))
    }
}


export default profileReducer;