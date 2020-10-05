import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket: Ticket;
  ticketId: number;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
  }

  getTicket(id: number) {
    this.ticketService.getTicket(id)
      .subscribe(response => {
        this.ticket = response;
      });
  }
}
