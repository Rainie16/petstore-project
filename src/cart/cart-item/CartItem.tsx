import React from 'react';

import "./cart-item.styles.scss"
import {connect, useSelector} from "react-redux";

const CartItem = (item:any) => {

	// const item = useSelector((state: any)=>state)
	console.log('cartitem: item', item);

	console.log('item.item.quantity', item.item.quantity)

	return (
		<div className='cart-item'>
			<img src={item.item.image} alt='item'/>
			<div className='item-details'>
				<span className='name'>{item.item.name}</span>
				<span className='price'>
					{item.item.quantity} x ${item.item.price}
				</span>
			</div>
		</div>
	);
};

export default connect()(CartItem);

