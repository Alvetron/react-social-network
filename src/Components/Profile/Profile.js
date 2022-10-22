import Posts from './ChildrenComponents/Posts/Posts';
import UserContainer from "./ChildrenComponents/User/UserContainer";


const Profile = (props) => {
    return (
        <div>
            <UserContainer/>
            <Posts/>
        </div>
    )
}

export default Profile;
