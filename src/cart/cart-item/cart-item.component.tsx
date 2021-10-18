import React from 'react';

import './cart-item.styles.scss';
const CartItem = () => {
	return (
		<div className='cart-item'>
			<img  alt='item' />
			<div className='item-details'>
				<span className='name'></span>
				<span className='price'>
				</span>
			</div>
		</div>
	);
};

export default CartItem;
