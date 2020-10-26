import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models';

import { TicketService } from '../../services/ticket.service';
import { LogService } from '../../services/log.service';
import { CalendarModule } from 'primeng/calendar';

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
  priorityLevel: number;
  deadline: Date;

  constructor(private logService: LogService, private ticketService: TicketService) { 
  }

  ngOnInit(): void {
    this.ticket = new Ticket;
  }

  create() {
    this.ticket.title = this.ticketTitle;
    this.ticket.description = this.ticketDesc;
    this.ticket.timestamp = new Date();
    this.ticket.prioritylevel = this.priorityLevel;

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

}
