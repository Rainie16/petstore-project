import React from 'react';
import {logout} from "../actions/auth.action";
import {useDispatch} from "react-redux";

const Logout = () => {
    const dispatch = useDispatch();
    dispatch(logout());
    localStorage.clear();

    return (
        <h2>You are logout!</h2>
    );
}

export default Logout;
