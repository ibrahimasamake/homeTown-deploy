import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home/home.component';

export const routes: Routes = [

  {path: '',pathMatch:"full", component:HomeComponent},
  {path: 'home',pathMatch:"full", redirectTo: ""},
  {
    path: 'about',
    pathMatch:"full",
    loadComponent: () =>
      import('./features/about/about-house-info/about-house-info.component')
        .then(m => m.AboutHouseInfoComponent),
  },
  {
    path: 'reservation',
    pathMatch:"full",
    loadComponent: () =>
      import('./features/reservation/reservation.component')
        .then(m => m.ReservationComponent),
  },
  {
    path: 'contact',
    pathMatch:"full",
    loadComponent: () =>
      import('./features/contact/contact.component')
        .then(m => m.ContactComponent),
  },


];
