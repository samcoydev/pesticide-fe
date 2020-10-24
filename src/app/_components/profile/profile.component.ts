import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.user.subscribe(x => this.user = x);
  }

}
