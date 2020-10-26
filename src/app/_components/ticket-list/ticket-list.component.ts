import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service'
import { Ticket } from '../../models'
import { LogService } from '../../services/log.service'

import { Subscription } from 'rxjs'; // how we listen for events...

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  public className = '[TicketListComponent] ';

  tickets: Ticket[] = [];

  constructor(private logService: LogService, private ticketService: TicketService) { }

  subscription: Subscription;

  ngOnInit(): void {
    this.logService.log(this.className, "test");

    // set up the listener... the subscription here is an event listening object
    this.subscription = this.ticketService.ticketsUpdated$.subscribe(message => {
      this.getTickets();
    });
    
    // populate tickets on initial component load
    this.getTickets()
  }

  
  getTickets() {
    this.ticketService.getTickets()
      .subscribe(response => {
        this.tickets = response;
      });
  }

  show() {
    console.log(this.tickets);
  }

}
