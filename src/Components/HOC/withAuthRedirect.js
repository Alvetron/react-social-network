import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if(!props.isAuth) return <Navigate to='/login'/>;
        return <Component {...props}/>;
    };

    const mapStateToPropsRedirect = (state) => ({
        isAuth: state.auth.isAuth
    });

    return connect(mapStateToPropsRedirect)(RedirectComponent);
};


export default withAuthRedirect;