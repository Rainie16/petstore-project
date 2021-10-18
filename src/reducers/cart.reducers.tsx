import {appConstants} from "../shared/constants/constants";
import {addItemToCart} from "../cart/cart.utils";


const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action:any) => {
	switch (action.type) {
		case appConstants.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case appConstants.ADD_ITEM:
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
