import {Product} from "../models/product";
import {Storeservicetype} from "../models/storeservicetype";
import {User} from "../models/user";
import {UserInfo} from "../models/userInfo";

export const appConstants = {
    // routes
    homeRoute: '/',
    loginRoute: '/login',
    registerRoute: '/register',
    logoutRoute:'/logout',
    servicesRoute: '/storeservices',
    productByType: '/products/:type',
    productDetailById: '/products/:type/:id',
    userInfoRoute:'/user-details/:id',

    // actions
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_BY_TYPE: 'GET_PRODUCTS_BY_TYPE',
    GET_PRODUCTS_DETAILS_BY_ID: 'GET_PRODUCTS_DETAILS_BY_ID',
    ADD_PRODUCT: 'ADD_PRODUCT',
    LOGIN: 'LOGIN',
    CHECK_LOGIN: 'CHECK_LOGIN',
    REGISTER: 'REGISTER',
    LOGOUT: 'LOGOUT',
    GET_USER_INFO_BY_ID: 'GET_USER_INFO_BY_ID',
    ADD_USER_INFO: 'ADD_USER_INFO',

};

export interface ReduxState {
    user: User,
    userInfo: UserInfo,
    products: Product [],
    storeservicetypes: Storeservicetype [],
}