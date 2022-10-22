import userImg from '../../images/userImg.png';
import { NavLink } from "react-router-dom";
import Friend from './Friend';
import Pagination from '../common/Pagination';

const FindFriends = ({users, renderPagination, follow, unFollow, followingProcess, ...props}) => {
    return (
        <>
            <div className='flex'>
                <Pagination                 
                totalUsers={props.totalUsers}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                choosePage={props.choosePage}/>
            </div>
            {users.map(user => <Friend user={user} follow={follow} unFollow={unFollow} followingProcess={followingProcess}/>)
            }
        </>
    )
}

export default FindFriends;