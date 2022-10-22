import Preloader from "../Preloader/Preloader";
import Friends from "./Friends";
import {useEffect} from "react";
import {
    follow,
    followingProcess,
    setCurrentPage,
    setUsers, getUsersThunk,
    toggleLoader,
    unFollow
} from "../../redux/reducers/usersReducer";
import {connect} from "react-redux";
import { getCurrentPage, getFollowingProcess, getIsLoaded, getPageSize, getTotalUsers, getUsers, selectUsers } from "../../redux/selectors/friends-selectors";

const FindFriendsContainer = (props) => {
    useEffect(() => {
        if (props.users.length > 0) return;
        props.getUsersThunk(props.currentPage, props.pageSize);
    }, []);

    const choosePage = (page) => {
        props.getUsersThunk(page, props.pageSize);
    };

    const follow = (id) => {
        props.follow(id);
    };

    const unFollow = (id) => {
        props.unFollow(id);
    };

    // const renderPagination = () => {
    //     const pageCount = Math.ceil(props.totalUsers / props.pageSize);
    //     const elements = [];

    //     for (let i = 0; i < pageCount; i++) {
    //         const currentPage = i + 1;

    //         elements.push(
    //             <div className={`mx-2 cursor-pointer ${props.currentPage === currentPage ? 'font-bold' : ''}`}
    //                  onClick={() => choosePage(currentPage)}>{currentPage}</div>
    //         );
    //     };

    //     return elements;
    // };

    if (props.isLoaded) {
        return (
            <Friends
                follow={follow}
                unFollow={unFollow}
                users={props.users}
                // renderPagination={renderPagination}
                followingProcess={props.followingProcess}
                isAuth={props.isAuth}
                totalUsers={props.totalUsers}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                choosePage={choosePage}
            />
        )
    } else {
        return (
            <Preloader/>
        );
    }
}


const mapStateToProps = (state) => 
{
    return ({
        users: getUsers(state),
        totalUsers: getTotalUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoaded: getIsLoaded(state),
        followingProcess: getFollowingProcess(state),
    })
}

const mapDispatchToProps = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    toggleLoader,
    getUsersThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(FindFriendsContainer);