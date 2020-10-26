import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models';

import { TicketService } from '../../services/ticket.service';
import { LogService } from '../../services/log.service';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  public className = '[CreateTicketComponent] ';

  form: FormGroup;

  ticket: Ticket;
  ticketTitle: string;
  ticketDesc: string;
  priorityLevel: number;
  ticketStatus: number;
  deadline: Date;

  currentUser: User;

  constructor(
    private logService: LogService, 
    private ticketService: TicketService,
    private accountService: AccountService,
    private formBuilder: FormBuilder
    ) { 
      this.accountService.user.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.ticket = new Ticket;
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  get f() { return this.form.controls; }
  
  create() {
    this.ticket.title = this.ticketTitle;
    this.ticket.description = this.ticketDesc;
    this.ticket.timestamp = new Date();
    this.ticket.prioritylevel = this.priorityLevel;
    this.ticket.creator = this.currentUser.email;
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

  assignUser(email: string) {

  }

}
