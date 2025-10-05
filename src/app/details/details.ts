import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FlightModel} from '../../models/flight.model';
import {FlightService} from '../services/flight.service';
import {JsonPipe, NgIf} from '@angular/common';
import {UtilsService} from '../services/utils.service';
import {Loading} from '../loading/loading';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {SafePipe} from '../safe-pipe';


@Component({
  selector: 'app-details',
    imports: [JsonPipe, NgIf, Loading, MatCardModule, MatButtonModule, MatListModule, SafePipe, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {

    public flight:FlightModel | null = null;

    public constructor(private route: ActivatedRoute, public utils:UtilsService){
        route.params.subscribe(params =>{
            FlightService.getFlightById(params['id']).
            then(response => this.flight = response.data);
        });
    }

    public generateMapLink(){
        return `https://www.google.com/maps?output=embed&q=${this.flight?.destination}`;
    }


}
