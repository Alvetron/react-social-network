import Header from "./Header";
import {connect} from "react-redux";
import {authMe, logout} from "../../redux/reducers/authReducer";
import { Navigate } from "react-router-dom";


const HeaderContainer  = ({authMe, logout, auth}) => {
    const loginHandler = () => {
        authMe()
    }

    const logoutHandler = () => {
        logout();
    }

    
    return (
        <>
        <Header loginHandler={loginHandler} logoutHandler={logoutHandler} auth={auth}/>
        </>
    )
}

export default connect((state) => ({auth: state.auth}),{authMe, logout})(HeaderContainer);