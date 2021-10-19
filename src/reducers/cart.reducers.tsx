import {appConstants} from "../shared/constants/constants";
import {addItemToCart} from "../cart/cart.utils";


const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action:cartAction) => {
	switch (action.type) {
		case appConstants.TOGGLE_CART_HIDDEN:
			console.log('togglecart reducer', state);
			return {
				...state,
				hidden: !state.hidden,
			};

		case appConstants.ADD_ITEM:
			console.log('additem reducer', state);
			// localStorage.setItem("cart", JSON.stringify(product));
			return {
				...state,
				// cartItems: [...state.cartItems, action.payload],
				cartItems: addItemToCart(state.cartItems, action.payload),
			};

		default:
			return state;
	}
};

export default cartReducer;

export interface cartAction {
	type: string,
	payload?: object
}
