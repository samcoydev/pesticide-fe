import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  subscription: Subscription;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.subscription = this.accountService.usersUpdated$.subscribe(message => {
      this.getUsers();
    });

    this.getUsers();
  }

  getUsers() {
    this.accountService.getUsers()
      .subscribe(response => {
        this.users = response;
      });
  }

}
