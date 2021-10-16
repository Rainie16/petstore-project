import axios from "axios";
import qs from "qs";
import {appConstants} from "../shared/constants/constants";
import {User} from "../shared/models/user";

export const register = (user: {username:string, password:string}) => {
    const registerPromise = axios.post(
        `${process.env.REACT_APP_API}/users`,
       user,
        {withCredentials: true}
    );

    return {
        type: appConstants.REGISTER,
        payload: registerPromise
    }
};

export const login = (user: {username: string, password: string}) => {
    const loginPromise = axios.post(
        `${process.env.REACT_APP_API}/login`,
        qs.stringify(user),
        {withCredentials: true}
    );

    return {
        type: appConstants.LOGIN,
        payload: loginPromise
    }
};

export const getUserByUsername = (username: string) => {
    const getUserInfoByUserNamePromise = axios.get(
        `${process.env.REACT_APP_API}/users/name/${username}`
        ,
        {withCredentials: true}
    );

    return {
        type: 'GET_USERINFO_BY_ID',
        payload: getUserInfoByUserNamePromise
    }
}

export const checkLogin = () => {
    const checkLoginPromise = axios.get(
        `${process.env.REACT_APP_API}/checklogin`
    , {withCredentials: true});

    //console.log("what is checkloginpromise",checkLoginPromise);

    return {
        type: appConstants.CHECK_LOGIN,
        payload: checkLoginPromise
    }
};

export const logout = () => {
    const logoutPromise = axios.post(
        `${process.env.REACT_APP_API}/logout`,
        null,
        {withCredentials: true}
    );
    return {
        type: appConstants.LOGOUT,
        payload: logoutPromise
    }
}