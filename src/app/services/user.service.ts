import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { BaseService } from '../services/baseService';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "User"

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${BaseService.apiUrl}/${this.url}`);
  }

}
