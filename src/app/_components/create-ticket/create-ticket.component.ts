import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models';

import { TicketService } from '../../services/ticket.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  public className = '[CreateTicketComponent] ';

  ticket;
  ticketTitle: string;
  ticketDesc: string;

  constructor(private logService: LogService, private ticketService: TicketService) { 
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
        this.logService.log(this.className, data);
        
        // notify the service that the ticket list has changed
        this.ticketService.announceTicketsUpdated("Tickets updated - new record");
    }, error => this.logService.log(this.className, error));;
  }

}
