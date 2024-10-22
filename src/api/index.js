import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: { 'API-KEY': '4621d2ee-32ba-46a2-a70d-6f671980f21a' }
})

export const API = {
    getUsers: (currentPage, pageSize) => {
        return instance
            .get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(({ data }) => data);
    },
    getProfile: (userId) => {
        return instance
            .get(`/profile/${userId}`)
            .then(({ data }) => data);
    },
    authMe: () => {
        return instance
            .get('/auth/me')
            .then(({ data }) => data)
    },
    followUser: (id) => {
        return instance
            .post(`/follow/${id}`)
            .then(({ data }) => data)
    },
    unfollowUser: (id) => {
        return instance
            .delete(`/follow/${id}`)
            .then(({ data }) => data)
    },
}