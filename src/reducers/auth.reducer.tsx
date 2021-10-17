import {AxiosResponse} from "axios";
import {appConstants} from "../shared/constants/constants";

export const authReducer = (state: any = null, action: authReducerAction) => {
    const newState = {...state};
    switch (action.type) {
        case appConstants.LOGIN:
            newState.isLogin = action.payload.data.success ? true : false;
            // localStorage.setItem('user', JSON.stringify(action.payload.data))
            //console.log("what will login return?", action.payload)
            return newState;
        case appConstants.REGISTER:
            console.log('REDUCER: action.payload.data',action.payload.data)
            return action.payload.data;
        case 'GET_USER_BY_ID':
            return action.payload.data;
        case appConstants.LOGOUT:
            return null;
        case appConstants.CHECK_LOGIN:
            //if(action.payload.data.success)
            // console.log("is it able to get",action.payload.data.user);
            newState.userInfo = action.payload.data;
            return newState;
           // return state;
        default:
            return state;
    }
};

interface authReducerAction {
    type: string,
    payload: AxiosResponse<any>
}