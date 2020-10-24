import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from './services/account.service';
import { LogService } from './services/log.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fromName = '[AppComponent] ';

  currentUser: User;

  constructor(
    private log: LogService,
    private router: Router,
    private accountService: AccountService
  ) {
    this.accountService.user.subscribe(x => this.currentUser = x);
  }
}
