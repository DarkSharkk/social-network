import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: { 'API-KEY': '4621d2ee-32ba-46a2-a70d-6f671980f21a' }
});

type UserType = {
    id: number,
    name: string,
    followed: boolean,
    photos: {
        small?: string,
        large?: string,
    }
    status?: string,
};

type GetUsersType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null,
};

type GetProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string,
    }
    photos: UserType['photos'],
};

export enum ResultCodes {
    Success = 0,
    Error = 1,
    CaptchaError = 10,
}

type UpdateProfileStatusType = {
    data: any,
    resultCode: ResultCodes,
    messages: Array<string>,
};

type UpdateProfilePhotoType = {
    data: UserType['photos'],
    resultCode: ResultCodes,
    messages: Array<string>,
};

type UpdateProfileInfoType = {
    data: any,
    resultCode: ResultCodes,
    messages: Array<string>,
};

type AuthMeType = {
    data: {
        id: number,
        email: string,
        login: string,
    },
    resultCode: ResultCodes,
    messages: Array<string>,
};

type LoginType = {
    data: { userId: number },
    resultCode: ResultCodes,
    messages: Array<string>,
};

type LogoutType = {
    data: any,
    resultCode: ResultCodes,
    messages: Array<string>,
};

type FollowUserType = {
    data: any,
    resultCode: ResultCodes,
    messages: Array<string>,
};

export const API = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance
            .get<GetUsersType>(`/users?page=${currentPage}&count=${pageSize}`)
            .then(({ data }) => data);
    },
    getProfile: (userId: number) => {
        return instance
            .get<GetProfileType>(`/profile/${userId}`)
            .then(({ data }) => data);
    },
    getProfileStatus: (userId: number) => {
        return instance
            .get<string>(`/profile/status/${userId}`)
            .then(({ data }) => data);
    },
    updateProfileStatus: (status: string) => {
        return instance
            .put<UpdateProfileStatusType>('/profile/status', { status })
            .then(({ data }) => data);
    },
    updateProfilePhoto: (photo: any) => {
        const formData = new FormData();
        formData.append("image", photo);

        return instance
            .put<UpdateProfilePhotoType>('/profile/photo', formData)
            .then(({ data }) => data);
    },
    updateProfileInfo: (info: any) => {
        return instance
            .put<UpdateProfileInfoType>('/profile', info)
            .then(({ data }) => data);
    },
    authMe: () => {
        return instance
            .get<AuthMeType>('/auth/me')
            .then(({ data }) => data)
    },
    login: ({ email, password, rememberMe, captcha }) => {
        return instance
            .post<LoginType>('/auth/login', { email, password, rememberMe, captcha })
            .then(({ data }) => data)
    },
    logout: () => {
        return instance
            .delete<LogoutType>('/auth/login')
            .then(({ data }) => data);
    },
    followUser: (id: number) => {
        return instance
            .post<FollowUserType>(`/follow/${id}`)
            .then(({ data }) => data)
    },
    unfollowUser: (id: number) => {
        return instance
            .delete<FollowUserType>(`/follow/${id}`)
            .then(({ data }) => data)
    },
    getCaptcha: () => {
        return instance
            .get<{ url: string }>('/security/get-captcha-url')
            .then(({ data }) => data);
    },
}