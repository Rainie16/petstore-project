import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {rootReducer} from "./reducers/rootReducer";
import reduxPromise from 'redux-promise';
import Login from './login/Login';
import { appConstants } from './shared/constants/constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './banner/Banner';
import Products from './products/Products';
import ProductDetails from './products/product-details/ProductDetails';
import Register from "./register/Register";
import Logout from "./logout/Logout";
import UserInfos from "./user-details/user-info/UserInfos";
import Pets from "./user-details/pet/Pets";
import Paymentinfo from "./user-details/payment-info/Paymentinfo";

const root = document.querySelector('#root');

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path={appConstants.homeRoute} exact>
                        <Banner/>
                    </Route>
                    <Route path={appConstants.productByType} exact>
                        <Products />
                    </Route>
                    <Route path={appConstants.productDetailById} exact>
                        <ProductDetails />
                    </Route>
                    <Route path={appConstants.loginRoute} component={Login}></Route>
                    <Route path={appConstants.registerRoute} component={Register}></Route>
                    <Route path={appConstants.logoutRoute} component={Logout}></Route>
                    <Route path={appConstants.userInfoRoute} component={UserInfos}></Route>
                    <Route path={appConstants.petsRoute} component={Pets}></Route>
                    <Route path={appConstants.paymentRoute} component={Paymentinfo}></Route>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    ,
    root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
