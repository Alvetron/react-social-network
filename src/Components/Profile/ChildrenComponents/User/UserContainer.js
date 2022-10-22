import User from "./User";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getStatus, getUser, updateStatus} from "../../../../redux/reducers/profileReducer";
import {useParams} from "react-router-dom";

const UserContainer = (props) => {
    let {userid} = useParams();

    useEffect(() => {
        // if(!userid) userid = 20485;
        if(!userid) userid = props.userid;
        props.getUser(userid)
        props.getStatus(userid)
    }, []);

    return (
        <User
            profile={props.profile}
            status={props.status}
            getStatus={props.getStatus}
            updateStatus={props.updateStatus}
        />
    )
}

const mapStateToProps = (state) => ({
    profile: state.profile.user,
    status: state.profile.status,
    userid: state.auth.userId,
})

const mapDispatchToProps = {
    getUser,
    getStatus,
    updateStatus,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);