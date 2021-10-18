import axios from "axios";
import {appConstants} from "../shared/constants/constants";
import {UserInfo} from "../shared/models/userInfo";


export const getUserInfoById = (payload: number) => {
    const getUserInfoByIdPromise = axios.get(`http://localhost:8080/user-details`);
    return {
        type: appConstants.GET_USER_INFO_BY_ID,
        payload: getUserInfoByIdPromise,
    };
}

export const addUserInfo = (userInfo: UserInfo) => {
    const addUserInfoPromise = axios.post(`http://localhost:8080/user-details`,
        userInfo,{withCredentials: true});
    console.log("adduserinfo action", addUserInfoPromise)
    return {
        type: appConstants.ADD_USER_INFO,
        payload: addUserInfoPromise,
    }
}

export const editUserInfo = (userInfo: UserInfo) => {
    const editUserInfoPromise = axios.put(`http://localhost:8080/user-details`,userInfo);
    console.log("edit info action", editUserInfoPromise);
    return {
        type: appConstants.EDIT_USER_INFO,
        payload: editUserInfoPromise
    }
}