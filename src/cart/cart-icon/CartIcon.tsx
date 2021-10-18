import React from 'react';
import { connect } from 'react-redux';


import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from "../../actions/cart.action";
import {selectCartItemsCount} from "../cart-selectors";


const CartIcon = ({ toggleCartHidden, itemCount }:any) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state: any) => ({
    itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);