import { Router } from '@angular/router';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { UserService } from '../user.service';

import { UsersService } from '../app/users.service';
import { Users, Crypto } from '../app/users';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule, HttpClientModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  flag: boolean = true;
  user: Users | undefined; 
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the user ID from the route parameter
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.fetchUserDetails(+userId);
    }
  }

  async fetchUserDetails(userId: any): Promise<void> {
    try {
      this.user = await this.usersService.getUserById(userId).toPromise();
      console.log('User Details:', this.user);
    } catch (error) {
      console.error('Error fetching user details', error);
    }
    console.log('User:', this.user);

    
  }
}
