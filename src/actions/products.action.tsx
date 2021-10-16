import axios from "axios";
import {appConstants} from "../shared/constants/constants";
import {Product} from "../shared/models/product";
//
// export const getProducts = () => {
//     const getProductsPromise = axios.get('http://localhost:8080/products/')
//     return {
//         type: appConstants.GET_PRODUCTS,
//         payload: getProductsPromise,
//     };
// }
// by Dog and Cat
export const getProductsByType = (payload: string )=> {
    const getProductsByTypePromise = axios.get(`http://localhost:8080/products/type/${payload}`);
    return {
        type: appConstants.GET_PRODUCTS_BY_TYPE,
        payload: getProductsByTypePromise,
    };
}
export const productDetailById = (payload: string )=> {
    const getProductsDetailsByIdPromise = axios.get(`http://localhost:8080/products/${payload}`);
    return {
        type: appConstants.GET_PRODUCTS_DETAILS_BY_ID,
        payload: getProductsDetailsByIdPromise,
    };
}

export const addProduct = (product: Product) => {
    const addProductPromise = axios.post('http://localhost:8080/products', product);
    return {
        type: appConstants.ADD_PRODUCT,
        payload: addProductPromise,
    };

}