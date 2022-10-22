import {combineReducers, createStore, applyMiddleware } from "redux";
import messagesReducer from './reducers/messagesReducer';
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./reducers/appReducer";

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;