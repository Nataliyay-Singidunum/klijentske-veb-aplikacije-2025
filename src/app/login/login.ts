import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

    public email:string = '';
    public password:string = '';

    public updateEmail(event:any){
        this.email = event.target.value;
    }

    public updatePassword(event:any){
        this.password = event.target.value;
    }

    public doLogin(){
        alert(`${this.email} ${this.password}`);
    }

}
