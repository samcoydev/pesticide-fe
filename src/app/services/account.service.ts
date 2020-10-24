import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LogService } from '../services/log.service'
import { environment } from '../../environments/environment'

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url = environment.apiUrl;
  public className = '[AccountService] ';

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private httpClient: HttpClient, private logService: LogService) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username, password) {
    this.logService.log(this.className, 'Logging in as: ' + username);
    return this.httpClient.post<User>(this.url + '/users/authenticate', { username, password})
      .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    this.logService.log(this.className, 'Logged out');
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  resetUser() {
    // remove user from local storage and set current user to null
    this.logService.log(this.className, 'Reset');
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  register(user: User) {
    return this.httpClient.post(this.url + '/users/register', user);
  }

  getAll() {
    return this.httpClient.get<User[]>(this.url + '/users');
  }

  getById(id: string) {
    return this.httpClient.get<User>(this.url + '/' + `${id}`);
  }

  delete(id: string) {
    return this.httpClient.delete(this.url + '/' + `${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue.id) {
            this.logout();
        }
        return x;
      }));
  }
}
