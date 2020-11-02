import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Ticket } from '../../models/ticket';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  assignedTickets: Ticket[];

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.user.subscribe(x => {
      this.user = x;
    });
    console.log(this.user, this.user.ID);
    this.accountService.getAssignedTickets(this.user.ID).subscribe(y => this.assignedTickets = y);
  }

}
