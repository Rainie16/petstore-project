import {AxiosResponse} from "axios";
import {Product} from "../shared/models/product";
import {appConstants} from "../shared/constants/constants";

export const productsReducer = (state: Product [] | null = null, action: productsAction) => {

    switch(action.type) {
        case appConstants.GET_PRODUCTS:
            console.log(action.payload.data);
            return action.payload.data;

        case appConstants.ADD_PRODUCT:
            return state;
        default:
            return state;
    }
};

export interface productsAction {
    type: string,
    payload: AxiosResponse<Product[]>
}