import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'about', component: About},

    { path: '**', redirectTo: ''} // svi pathovi moraju biti definisani iznad ovog jer on mapira bilo sta dalje na home komponentu
];
