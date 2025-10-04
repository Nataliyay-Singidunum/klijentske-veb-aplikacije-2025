import { Component } from '@angular/core';
import {FlightService} from "../services/flight.service";
import {NgFor, NgIf} from '@angular/common';
import {AxiosError} from 'axios';
import {FlightModel} from '../../models/flight.model';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {UtilsService} from '../services/utils.service';
import {Loading} from '../loading/loading';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [NgIf, NgFor, MatCardModule, MatButtonModule, Loading, RouterLink],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {
    flights: FlightModel[] | null = null;
    error: string | null = null;

    constructor(public utils:UtilsService) {
        FlightService.getFlights(0,4).
        then(response => this.flights = response.data.content)
        .catch((error:AxiosError) => this.error = `${error.code}: ${error.message}`); // mini error handling
    }
}
