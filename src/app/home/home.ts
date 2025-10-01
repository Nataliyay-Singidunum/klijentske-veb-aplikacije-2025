import { Component } from '@angular/core';
import {FlightService} from "../services/flight.service";
import {JsonPipe, NgFor, NgIf} from '@angular/common';
import {AxiosError} from 'axios';
import {FlightModel} from '../../models/flight.model';

@Component({
  selector: 'app-home',
    imports: [JsonPipe, NgIf, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    flights: FlightModel[] | null = null;
    error: string | null = null;

    constructor() {
        FlightService.getFlights().
        then(response => this.flights = response.data.content)
        .catch((error:AxiosError) => this.error = `${error.code}: ${error.message}`); // mini error handling
    }
}
