import {Product} from "./product";

export interface Order {
    id?: number;
    purchase_date: Date;
    shipping_address: string;
    status: string;
    paymentInfo_id: number;
    products: Product[]
}