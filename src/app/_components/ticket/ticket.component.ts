import { Component, Input, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../../services/log.service';
import {trigger, style, animate, transition, state} from '@angular/animations';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  animations: [
    trigger('stretch', [
      transition('void => *', [
        style({ opacity: 0, width:'0%' }),
        animate(500, style({opacity: 1, width:'100%'}))
      ])
    ]),
  ]
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
