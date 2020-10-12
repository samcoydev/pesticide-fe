import { Component, Input, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket: Ticket;

  constructor(private route: ActivatedRoute, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      const id = +this.route.snapshot.paramMap.get('ticketId');
      console.log('ticket id: ', id);

      if (id >0) {
        this.getTicket(id);
      }
    });
  };

  getTicket(id: number) {
    this.ticketService.getTicket(id)
      .subscribe(response => {
        this.ticket = response;
    });
    
  }
}
