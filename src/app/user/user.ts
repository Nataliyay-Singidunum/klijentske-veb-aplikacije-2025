import { Component } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {OrderModel} from '../../models/order.model';
import {NgFor, NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user',
  imports: [NgFor, NgIf, MatButtonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

    public orders:OrderModel[] = [];

    constructor(private router:Router){
        if(!UserService.getActiveUser()){
            // Korisnik nije ulogovan
            // Vrati korisnika na homepage
            router.navigate(['/home']);
            alert('You must be logged in to access this page');
            return;
        }

        this.orders = UserService.getActiveUser()!.orders;
    }

    protected readonly service = UserService;

    public doChangePassword(){
        const newPassword = prompt('Enter new password');
        if(newPassword == null || newPassword == ''){
            return alert('Password cannot be empty');
        }
        if(UserService.changePassword(newPassword!)){
            alert('Password changed');
        }else{
            alert('Failed to change password');
        }
    }
}
