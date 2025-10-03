import { Component } from '@angular/core';
import {FlightService} from "../services/flight.service";
import {NgFor, NgIf} from '@angular/common';
import {AxiosError} from 'axios';
import {FlightModel} from '../../models/flight.model';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-home',
    imports: [NgIf, NgFor, MatCardModule, MatButtonModule],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {
    flights: FlightModel[] | null = null;
    error: string | null = null;

    constructor() {
        FlightService.getFlights(0,4).
        then(response => this.flights = response.data.content)
        .catch((error:AxiosError) => this.error = `${error.code}: ${error.message}`); // mini error handling
    }

    formatDate(iso:string){
        return new Date(iso).toLocaleDateString("sr-RS", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            });
    }

    public generateDestinationImage(destination:string){
        return `https://img.pequla.com/destination/${destination.split(' ')[0].toLowerCase()}.jpg`;
    }
}
