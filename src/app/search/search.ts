import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {FlightModel} from '../../models/flight.model';
import {NgIf} from '@angular/common';
import {FlightService} from '../services/flight.service';
import {MatButtonModule} from '@angular/material/button';
import {UtilsService} from '../services/utils.service';

@Component({
  selector: 'app-search',
    imports: [MatTableModule, NgIf, MatButtonModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
    displayedColumns: string[] = ['id', 'destination', 'flightNumber', 'scheduledAt', 'actions'];
    dataSource: FlightModel[] | null = null;

    public constructor(public utils:UtilsService){
        FlightService.getFlights(0,13)
            .then(response => this.dataSource = response.data.content);

    }
}
