import { NavLink } from "react-router-dom";
import UserImg from '../common/UserImg';

const Friend = ({user, follow, unFollow, followingProcess}) => {
    return (
        <div>
        <NavLink to={`/profile/${user.id}`}>
            <UserImg photo={user.photos.small}/>
        </NavLink>
        <div>
            {user.followed ?
                <button
                    className='disabled:bg-black'
                    onClick={() => {
                        unFollow(user.id)

                    }}
                    disabled={followingProcess.some(id => id === user.id)}
                >Unfollow
                </button> :
                <button
                    className='disabled:bg-black'
                    onClick={() => follow(user.id)}
                    disabled={followingProcess.some(id => id === user.id)}
                >Follow
                </button>
            }
        </div>
        <div>{user.name}</div>
        <div>{user.status != null ? user.state : 'status:)'}</div>
        <br/>
    </div>
    )
}

export default Friend;