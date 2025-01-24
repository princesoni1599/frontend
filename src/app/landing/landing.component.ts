import { Component } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  data: Users[] = [];
    title = 'frontend';
    loading = true;
  selectedRole: string | undefined;
    constructor(private usersService: UsersService, private router: Router) {}
  
    async ngOnInit(): Promise<void> {
      try {
        // Use firstValueFrom to convert the observable to a promise
        this.data = await firstValueFrom(this.usersService.getUsers()); // Wait for the data
        console.log('Data:', this.data); // Log the data after it has been fetched
        console.log('Address:', this.data[0]?.address); // Log the address of the first user
      } catch (error) {
        console.error('Error fetching data', error); // Handle error
      }
      finally {
        this.loading = false;
      }
      
  }
    goToProfile(userId: any): void {
      this.router.navigate(['/profile', userId]);
    }

    onRoleChange(event: Event): void {
      const selectElement = event.target as HTMLSelectElement;
      this.selectedRole = selectElement.value;
      this.router.navigate(['/filter', this.selectedRole]);
    }
  
}
