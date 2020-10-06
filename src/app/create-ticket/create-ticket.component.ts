import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models';

import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  ticket;
  ticketDesc: string;

  constructor(private ticketService: TicketService) { 
  }

  ngOnInit(): void {
    this.ticket = new Ticket;
  }

  create() {
    this.ticket.description = this.ticketDesc;
    this.ticket.timestamp = new Date();

    this.ticketService.postTicket(this.ticket)
    .subscribe(data => {
        console.log(data);
    }, error => console.log(error));;
  }

}
