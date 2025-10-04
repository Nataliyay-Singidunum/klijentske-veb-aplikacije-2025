import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

    constructor() { }

    public formatDate(iso:string){
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
