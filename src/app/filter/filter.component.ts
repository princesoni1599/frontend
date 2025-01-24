import { Component, OnInit } from '@angular/core';
import { Users, } from '../users';
import { UsersService } from '../users.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, RouterModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {

  users: Users[] | undefined;
      title = 'frontend';
      loading = true;
      constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) {}

      ngOnInit(): void {
        // Get the user ID from the route parameter
        const role = this.route.snapshot.paramMap.get('role');
        if (role) {
          this.fetchUserDetails(role);
        }
      }
    
      async fetchUserDetails(role: any): Promise<void> {
        try {
          this.users = await this.usersService.getUserByRole(role).toPromise()
          console.log('User Details:', this.users);
        } catch (error) {
          console.error('Error fetching user details', error);
        }
        console.log('User:', this.users);
        
    }
    goToProfile(userId: any): void {
      this.router.navigate(['/profile', userId]);
    }
}
