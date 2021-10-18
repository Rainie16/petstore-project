import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';
import CartItem from "../cart-item/cart-item.component";
import { Link } from 'react-router-dom';
import {selectCartItems} from "../cart-selectors";


const CartDropdown = ({ cartItems }: any) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map((cartItem: any) => (
					<CartItem key={cartItem.id} />
				))}
			</div>
			<button>
				<Link to={'/paymentinfo'}/>
				Check out now</button>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
