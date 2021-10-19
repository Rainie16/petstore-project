import React from 'react';
import { connect } from 'react-redux';

import "./cart-dropdown.styles.scss"
import {selectCartItems} from "../cart-selectors";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems }: any) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map((cartItem: any) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<button>CHECKOUT NOW!</button>
		</div>
	);
};

const mapStateToProps = (state:any) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
