import {AirlineModel} from './airline.model';

export interface OrderModel {

    flightId: number;
    flightNumber: string;
    destination: string;
    airline: AirlineModel;
    count: number;
    pricePerItem: number;
    status: 'ordered' | 'paid' | 'cancelled';
    rating: null | boolean;

}
