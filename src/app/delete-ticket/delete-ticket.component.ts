import { Component, OnInit } from '@angular/core';

import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models';

@Component({
  selector: 'app-delete-ticket',
  templateUrl: './delete-ticket.component.html',
  styleUrls: ['./delete-ticket.component.css']
})
export class DeleteTicketComponent implements OnInit {

  ticket: Ticket;
  ticketId: number;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.ticketService.deleteTicket(id)
      .subscribe(response => {
        this.ticket = response;
      });
  }

}
