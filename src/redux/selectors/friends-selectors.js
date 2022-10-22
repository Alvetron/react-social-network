// import { createSelector } from "reselect";

export const getUsers = state => state.users.users

export const getTotalUsers = state => state.users.totalUsers;
export const getPageSize = state => state.users.pageSize;
export const getCurrentPage = state => state.users.currentPage;
export const getIsLoaded = state => state.users.isLoaded;
export const getFollowingProcess = state => state.users.followingProcess;

// export const selectUsers = createSelector(getUsers, (users) => {
//     return users;
// })
