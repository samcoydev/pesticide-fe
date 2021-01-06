import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models';

import { TicketService } from '../../services/ticket.service';
import { LogService } from '../../services/log.service';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class CreateTicketComponent implements OnInit {
  public className = '[CreateTicketComponent] ';

  form: FormGroup;
  submitted = false;

  ticket: Ticket;
  ticketTitle: string;
  ticketDesc: string;
  priorityLevel: number;
  ticketStatus: number;
  assignedUsername: string;
  deadline: Date;

  currentUser: User;
  userList: User[];

  constructor(
    private logService: LogService, 
    private ticketService: TicketService,
    private accountService: AccountService,
    private formBuilder: FormBuilder
    ) { 
      this.accountService.user.subscribe(x => this.currentUser = x);
      this.accountService.getAll().subscribe(x => this.userList = x);
  }

  ngOnInit(): void {
    this.ticket = new Ticket;
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  get f() { return this.form.controls; }

  create() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.ticket = this.form.value;
    this.ticket.creator = this.currentUser.email;
    this.ticket.timestamp = new Date();
    this.ticket.priorityLevel = this.priorityLevel;
    this.ticket.deadline = new Date(this.deadline);
    this.ticket.assignedusername = this.assignedUsername;
    this.ticket.status = 0;

    this.ticketService.postTicket(this.ticket)
    .subscribe(data => {
        this.logService.log(this.className, data);
        
        // notify the service that the ticket list has changed
        this.ticketService.announceTicketsUpdated("Tickets updated - new record");
    }, error => this.logService.log(this.className, error));;
  }

  setPriority(level: number) {
    this.priorityLevel = level;
  }

  assignUser(user: User) {
    this.assignedUsername = user.username;
  }

}
