import {UserInfo} from "../shared/models/userInfo";
import {AxiosResponse} from "axios";
import {appConstants} from "../shared/constants/constants";

export const userInfoReducer = (state: UserInfo | null = null, action: userInfoAction) => {

    switch(action.type) {
        case appConstants.GET_USER_INFO_BY_ID:
            console.log(action.payload.data);
            return action.payload.data;
        case appConstants.ADD_USER_INFO:
            console.log('add userinfo reducer',state, action.payload.data);
            return state;
        case appConstants.EDIT_USER_INFO:
            console.log('edit userinfo reducer state', state, 'data', action.payload.data);
            return state;
        default:
            return state;
    }
};

export interface userInfoAction {
    type: string,
    payload: AxiosResponse<any>
}