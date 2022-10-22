import {usersAPI} from "../../assets/api";

const FOLLOW_USER = 'usersReducer/follow_user'; 
const UNFOLLOW_USER = 'usersReducer/unfollow_user'; 
const SET_USERS = 'usersReducer/set_users'; 
const SET_CURRENT_PAGE = 'usersReducer/set_current_page'; 
const TOGGLE_LOADER = 'usersReducer/toggle_loader'; 
const FOLLOWING_PROCESS = 'usersReducer/following_fetching'; 

const initialState = {
    users: [],
    totalUsers: 100,
    pageSize: 10,
    currentPage: 1,
    isLoaded: false,
    followingProcess: [],
    fake: 10,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: updateUserArray(state.users, 'id', action.id, true)
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: updateUserArray(state.users, 'id', action.id, false)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOGGLE_LOADER:
            return {
                ...state,
                isLoaded: action.boolean
            }
        case FOLLOWING_PROCESS:
            return {
                ...state,
                followingProcess: !action.boolean ?
                    state.followingProcess.filter(id => id !== action.id) :
                    [...state.followingProcess, action.id]
            }
        default:
            return state;
    }
}

const updateUserArray = (array, objectPropName, id, isFollowed) => {
    return array.map(user => {
        if(user[objectPropName] === id) {
            return {
                ...user,
                followed: isFollowed,
            }
        }
        return user
    })
}


export const followSuccess = (id) => ({type: FOLLOW_USER, id});
export const unFollowSuccess = (id) => ({type: UNFOLLOW_USER, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const toggleLoader = (boolean) => ({type: TOGGLE_LOADER, boolean});
export const followingProcess = (id, boolean) => ({type: FOLLOWING_PROCESS, id, boolean});


export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleLoader(false));
    dispatch(setCurrentPage(currentPage));

    const resp = await usersAPI.getPage(currentPage, pageSize);
    console.log(resp)
    dispatch(toggleLoader(true));
    dispatch(setUsers(resp.data.items));
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(followingProcess(id, true));

    const resp = await apiMethod(id);

    if(resp.data.resultCode === 0) dispatch(actionCreator(id));
    dispatch(followingProcess(id, false));
}

export const follow = id => dispatch => {
    followUnfollowFlow(dispatch, id, usersAPI.followUser, followSuccess);        
}

export const unFollow = id => dispatch => {
    followUnfollowFlow(dispatch, id, usersAPI.unFollowUser, unFollowSuccess);
        
}

export default usersReducer;