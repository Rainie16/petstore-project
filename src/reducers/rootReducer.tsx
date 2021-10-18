import {combineReducers} from "redux";
import {authReducer} from "./auth.reducer";
import {productsReducer} from "./products.reducer";
import {userInfoReducer} from "./userInfo.reducer";
import {petReducer} from "./pet.reducer";
import cartReducer from "./cart.reducers";

export const rootReducer = combineReducers({
    user: authReducer,
    products: productsReducer,
    userInfo: userInfoReducer,
    pets: petReducer,
    cart: cartReducer,
})