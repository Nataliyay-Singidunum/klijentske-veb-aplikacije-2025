export interface OrderModel {

    flightId: number;
    flightNumber: string;
    destination: string;
    count: number;
    pricePerItem: string;
    status: 'ordered' | 'paid' | 'cancelled';
    rating: null | boolean;

}
