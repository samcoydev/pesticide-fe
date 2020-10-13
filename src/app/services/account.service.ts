import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private httpClient, HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }
}
