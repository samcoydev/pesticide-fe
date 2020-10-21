import { Component, OnInit } from '@angular/core';

import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-delete-ticket',
  templateUrl: './delete-ticket.component.html',
  styleUrls: ['./delete-ticket.component.css']
})
export class DeleteTicketComponent implements OnInit {
  public className = '[DeleteTicketComponent] ';

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
