import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service'
import { Ticket } from '../models'

@Component({
  selector: 'app-ticket-list', // < --
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.getTickets()
  }
  
  getTickets() {
    this.ticketService.getTickets()
      .subscribe(response => {
        this.tickets = response;
      });
  }

}
