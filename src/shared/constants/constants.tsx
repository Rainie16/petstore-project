import {Product} from "../models/product";
import {Storeservicetype} from "../models/storeservicetype";
import {User} from "../models/user";
import {UserInfo} from "../models/userInfo";
import {Pet} from "../models/pet";

export const appConstants = {
    // routes
    homeRoute: '/',
    loginRoute: '/login',
    registerRoute: '/register',
    logoutRoute:'/logout',
    servicesRoute: '/storeservices',
    productByType: '/products/:type',
    productDetailById: '/products/:type/:id',
    userInfoRoute:'/user-details',
    petsRoute:'/pets',
    paymentRoute:'/payments',
    cartRoute: '/shopping-cart',

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
    EDIT_USER_INFO: 'EDIT_USER_INFO',
    GET_PETS: 'GET_PETS',
    ADD_PET: 'ADD_PET',
    EDIT_PET: 'EDIT_PET',
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
    ADD_ITEM: 'ADD_ITEM',

    // dog breeds:
    DogBreed: [
        {name:'Ameican Eskimo'},
        {name:'BullDog'},
        {name:'Chihuahua'},
        {name:'Chihuahua'},
        {name:'Poodle'},
    ]
    ,

};

export interface ReduxState {
    pets: Pet []
    user: User,
    userInfo: UserInfo,
    products: Product [],
    storeservicetypes: Storeservicetype [],
}