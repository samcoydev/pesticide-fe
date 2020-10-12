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
  ticketTitle: string;
  ticketDesc: string;

  constructor(private ticketService: TicketService) { 
  }

  ngOnInit(): void {
    this.ticket = new Ticket;
  }

  create() {
    this.ticket.title = this.ticketTitle;
    this.ticket.description = this.ticketDesc;
    this.ticket.timestamp = new Date();

    this.ticketService.postTicket(this.ticket)
    .subscribe(data => {
        console.log(data);
        // notify the service that the ticket list has changed
        this.ticketService.announceTicketsUpdated("Tickets updated - new record");
    }, error => console.log(error));;
  }

}
