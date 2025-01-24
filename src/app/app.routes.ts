import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { LandingComponent } from './landing/landing.component';
import { FilterComponent } from './filter/filter.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },  // Default route for the user list
  { path: 'profile/:id', component: UserProfileComponent },  // Route for the profile page
  { path: 'filter/:role', component: FilterComponent }  // Route for the profile page
];

