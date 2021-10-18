import {appConstants} from "../shared/constants/constants";

export const toggleCartHidden = () => ({
    type: appConstants.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: any) => ({
    type: appConstants.ADD_ITEM,
    payload: item,
});