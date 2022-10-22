import * as axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {'API-KEY': 'd92b1a99-c1ac-4ed2-b842-8376884d3d14'}
});


export const usersAPI = {
    getPage : (currentPage = 1, pageSize = 2) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
    },
    unFollowUser: (id) => {
        return instance.delete(`follow/${id}`)
    },
    followUser: (id) => {
        return instance.post(`follow/${id}`)
    }
}

export const profileAPI = {
    getProfileUser: (userid) => {
        return instance.get(`profile/${userid}`)
    },
    getProfileStatus: (userid) => {
        return instance.get(`profile/status/${userid}`)
    },
    updateProfileStatus: (statusText) => {
        return instance.put(`profile/status`, { status: statusText})
    },
}

export const authAPI = {
    getMe: () => {
        return instance.get('auth/me')
    },
    login: (email, password, rememberMe) => {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout: () => {
        return instance.delete('auth/login')
    }
}