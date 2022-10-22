import Profile from "./Profile";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";


const ProfileContainer = (props) => {
    return <Profile/>
}

export default compose(connect(), withAuthRedirect)(ProfileContainer);
