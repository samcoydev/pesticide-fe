import { Component, Input, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  public className = '[TicketComponent] ';

  ticket: Ticket;

  constructor(private logService: LogService, private route: ActivatedRoute, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      const id = +this.route.snapshot.paramMap.get('ticketId');
      this.logService.log(this.className, 'ticket id: ' + id)

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
