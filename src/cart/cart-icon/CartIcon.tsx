import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';


import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {selectCartItemsCount} from "../cart-selectors";
import {toggleCartHidden} from "../../actions/cart.action";


const CartIcon = ({itemCount}: any) => {

    const dispatch = useDispatch();

    const clickHandler = () => {
        console.log('carticon clickhandler')
        dispatch(toggleCartHidden());
    }

    console.log('togglecarthiddend or item count', toggleCartHidden)
    return (
        <div className='cart-icon' onClick={clickHandler}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};


//
// const mapDispatchToProps = (dispatch: any) => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

const mapStateToProps = (state: any) => ({
    itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(CartIcon);