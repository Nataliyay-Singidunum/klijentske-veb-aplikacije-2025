import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import {Search} from './search/search';
import {Airline} from './airline/airline';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'about', component: About},
    { path: 'search', component: Search},
    { path: 'airline', component: Airline},

    { path: '**', redirectTo: ''} // svi pathovi moraju biti definisani iznad ovog jer on mapira bilo sta dalje na home komponentu
];
