import {UserInfo} from "../shared/models/userInfo";
import {AxiosResponse} from "axios";
import {appConstants} from "../shared/constants/constants";

export const userInfoReducer = (state: UserInfo | null = null, action: userInfoAction) => {

    switch(action.type) {
        case appConstants.GET_USER_INFO_BY_ID:
            console.log(action.payload.data);
            return action.payload.data;
        case appConstants.ADD_USER_INFO:
            console.log('userinfo action', state);
            return state;
        default:
            return state;
    }
};

export interface userInfoAction {
    type: string,
    payload: AxiosResponse<any>
}