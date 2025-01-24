import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://h2bnaya.hzdyeuf4d8gcdhcs.eastus.azurecontainer.io:8081/v1'; // Spring Boot API URL
  
    constructor(private http: HttpClient) {}
  
    // Fetch users from the API
    getUsers(): Observable<Users[]>{
      return this.http.get<Users[]>(`${this.apiUrl}/users`);;
    }

    getUserById(id: number): Observable<Users> {
      return this.http.get<Users>(`${this.apiUrl}/${id}`);
    }

    getUserByRole(role: string): Observable<Users[]> {
      return this.http.get<Users[]>(`${this.apiUrl}/role/${role}`);
    }
}
