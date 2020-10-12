import { Component, Input, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket: Ticket;

  @Input() ticketId: number

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.getTicket(this.ticketId)
  };

  getTicket(id: number) {
    console.log('a ', this.ticketId);
    if(!id || id <= 0) {
      console.log("No id passed in");
    } else {
      this.ticketService.getTicket(id)
      .subscribe(response => {
        this.ticket = response;
      });
    }
  }
}
