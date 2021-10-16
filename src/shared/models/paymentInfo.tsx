export interface PaymentInfo {
    id?: number;
    name: string;
    cardNumber: string;
    expirationDate: Date;
    cvv: number;
}