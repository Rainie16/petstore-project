import {UserInfo} from "./userInfo";
import {Pet} from "./pet";
import {PaymentInfo} from "./paymentInfo";
import {Order} from "./order";

export interface User {
    isLogin?: boolean,
    id?:number,
    username: string,
    password:string,
    userinfo: any;
    pets: Pet [];
    paymentInfo: PaymentInfo [];
    orders: Order [];
}