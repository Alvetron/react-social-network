import Preloader from "../../../Preloader/Preloader";
import userImg from '../../../../images/userImg.png';
import ProfileStatus from "./ChildrenComponents/ProfileStatus/ProfileStatus";
import UserImg from "../../../common/UserImg";

const User = (props) => {
    if(!props.profile) {
        return <Preloader/>
    } else {

        const renderContacts = () => {
            let contacts = []
            for(let key in props.profile.contacts) {
                if(!props.profile.contacts[key]) continue;
                contacts.push(<li>{key}: {props.profile.contacts[key]}</li>)
            }
            return contacts;
        }

        return (
            <div>
                <figure>
                    <img 
                         src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/a4678377085855.5dc557e0c7af5.jpg'
                         alt=''/>
                </figure>
                <div className='flex p-4'>
                    <figure className='mr-5'>
                        <UserImg photo={props.profile.photos.small}/>
                    </figure>
                    <div>
                        <h4 className='text-2xl'>{props.profile.fullName}</h4>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        <ul>
                            <li>{props.aboutMe}</li>
                            <li>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : ''}</li>
                            <li>
                                <ul>{renderContacts()}</ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}



export default User;