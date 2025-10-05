import { Component } from '@angular/core';
import {FlightModel} from '../../models/flight.model';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {UtilsService} from '../services/utils.service';
import {FlightService} from '../services/flight.service';
import {DatePipe, JsonPipe, NgFor, NgIf} from '@angular/common';
import {Loading} from '../loading/loading';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {SafePipe} from '../safe-pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatLabel} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {AirlineModel} from '../../models/airline.model';
import {AirlineService} from '../services/airline.service';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-order',
    imports: [JsonPipe, NgIf, NgFor, Loading, MatCardModule, MatButtonModule, MatListModule, SafePipe, RouterLink, MatFormFieldModule, MatInput, MatLabel, ReactiveFormsModule, FormsModule, DatePipe, MatSelectModule],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order {

    public flight:FlightModel | null = null;
    public airlines: AirlineModel[] = AirlineService.getAirlines();
    public selectedAirline: number  = this.airlines[0].id;
    public selectedTicketCount: number = 1;
    public selectedPrice: number = 150;

    public constructor(private route: ActivatedRoute, public utils:UtilsService, private router:Router){
        route.params.subscribe(params =>{
            FlightService.getFlightById(params['id']).
            then(response => this.flight = response.data);
        });
    }

    public doOrder(){
        const result = UserService.createOrder({
            flightId: this.flight!.id,
            flightNumber: this.flight!.flightNumber,
            destination: this.flight!.destination,
            airline: AirlineService.getAirlineById(this.selectedAirline)!,
            count: this.selectedTicketCount,
            pricePerItem: this.selectedPrice,
            status: 'ordered',
            rating: null
            });

        result ? this.router.navigate(['/user']) : alert('Failed to order');
    }

}
