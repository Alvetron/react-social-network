import LoginForm from "./ChildrenComponents/LoginForm/LoginForm";
import {login} from "../../redux/reducers/authReducer";
import {connect} from "react-redux";
import { Navigate } from "react-router-dom";

const Login = ({login, isAuth}) => {
    const handleSubmit = (values) => {

        let rememberMe = values.agree ? true : false;
        login(values.login, values.password, rememberMe)
    } 

    if(isAuth) return <Navigate to='/profile'/>

    return(
        <LoginForm onSubmit={handleSubmit} login={login}/>
    );

};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
})

const mapDispatchToProps = {
    login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);