import {appConstants} from "../shared/constants/constants";
import {Product} from "../shared/models/product";

export const toggleCartHidden = () => {
    console.log('toggleCartHidden action');
    return {
        type: appConstants.TOGGLE_CART_HIDDEN,
    }
};

export const addItem = (item: Product) => {
    console.log("additem action item", item);
    return{
        type: appConstants.ADD_ITEM,
        payload: item,
    }
};