import {Product} from "../shared/models/product";


export const addItemToCart = (cartItems: any, cartItemToAdd: any) => {
	const existingCartItem = cartItems.find(
		(cartItem: Product) => cartItem.id === cartItemToAdd.id,
	);

	if (existingCartItem) {
		return cartItems.map((cartItem: Product) =>
			cartItem.id === cartItemToAdd.id
				?
				{ ...cartItem, quantity: (cartItem.quantity)! + 1 }
				:
				cartItem,
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
