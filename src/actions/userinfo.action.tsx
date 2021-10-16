import axios from "axios";
import {appConstants} from "../shared/constants/constants";
import {UserInfo} from "../shared/models/userInfo";

export const getUserInfoById = (payload: number) => {
    const getUserInfoByIdPromise = axios.get(`http://localhost:8080/user-details/${payload}`);
    return {
        type: appConstants.GET_USER_INFO_BY_ID,
        payload: getUserInfoByIdPromise,
    };
}

export const addUserInfo = (userInfo: UserInfo) => {
    const addUserInfoPromise = axios.post(`http://localhost:8080/user-details`, userInfo);
    return {
        type: appConstants.ADD_USER_INFO,
        payload: addUserInfoPromise,
    }
}