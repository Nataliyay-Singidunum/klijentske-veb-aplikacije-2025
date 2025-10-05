import {AirlineModel} from '../../models/airline.model';

export class AirlineService {

    // radimo siimuliran api poziv kako bismo demonstrirali da se to nekad moze implementirati
    public static getAirlines() : AirlineModel[] {
        return [
            {
                id: 1,
                name: 'Air Serbia',
                countryOfOrigin: 'Serbia',
                website: 'https://www.airserbia.com/'
            },
            {
                id: 2,
                name: 'Air Emirates',
                countryOfOrigin: 'UAE',
                website: 'https://www.emirates.com/english'
            },
            {
                id: 3,
                name: 'Lufthansa',
                countryOfOrigin: 'Germany',
                website: 'https://www.lufthansa.com/'
            },
            {
                id: 4,
                name: 'Air France',
                countryOfOrigin: 'France',
                website: 'https://www.airfrance.com/'
            },
            {
                id: 5,
                name: 'Turkish Airlines',
                countryOfOrigin: 'Turkiye',
                website: 'https://www.turkishairlines.com/'
            }
        ]
    }

    static getAirlineById(id: number) {
        return this.getAirlines().find(airline=>airline.id === id)
    }

    constructor() { }

}
