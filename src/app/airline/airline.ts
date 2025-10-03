import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {NgIf} from '@angular/common';
import {AirlineModel} from '../../models/airline.model';
import {AirlineService} from '../services/airline.service';


@Component({
    selector: 'app-airline',
    imports: [MatButtonModule, MatTableModule, NgIf],
    templateUrl: './airline.html',
    styleUrl: './airline.css'
})

export class Airline {
    displayedColumns: string[] = ['id', 'name', 'countryOfOrigin', 'website', 'actions'];
    dataSource: AirlineModel[] = AirlineService.getAirlines();

}
