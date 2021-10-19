import { createSelector } from 'reselect';
import {Product} from "../shared/models/product";

const selectCart = (state:any) => state?.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart: any) => cart?.cartItems,
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems: Product []) =>
		cartItems?.reduce(
			(accumulatedQuantity: any, cartItem: any) =>
				accumulatedQuantity + cartItem.quantity,
			0,
		),
);
