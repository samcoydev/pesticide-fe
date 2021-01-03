import { Component, OnInit, PipeTransform }  from '@angular/core';
import { TicketService } from '../../services/ticket.service'
import { Ticket } from '../../models'
import { LogService } from '../../services/log.service'

import { Subscription } from 'rxjs'; // how we listen for events...
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  public className = '[TicketListComponent] ';

  tickets: Ticket[] = [];
  tickets$: Observable<Ticket[]>;
  filter = new FormControl('');

  constructor(private logService: LogService, private ticketService: TicketService) {
    this.tickets$ = this.filter.valueChanges.pipe(startWith(''), map(text => this.search(text)))
  }

  subscription: Subscription;

  ngOnInit(): void {
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
        console.log(response);
      });
  }

  search(text: string): Ticket[] {
    return this.tickets.filter(ticket => {
      const term = text.toLowerCase();
      return ticket.title.toLowerCase().includes(term)
    });
  }

}
