import {Pet} from "../shared/models/pet";
import {AxiosResponse} from "axios";
import {appConstants} from "../shared/constants/constants";

export const petReducer = (state: Pet | null = null, action: petAction) => {

    switch(action.type) {
        case appConstants.GET_PETS:
            return action.payload.data;
        case appConstants.ADD_PET:
            return state;
        case appConstants.EDIT_PET:
            return state;
        default:
            return state;
    }
}

export interface petAction {
    type: string,
    payload: AxiosResponse<any>
}