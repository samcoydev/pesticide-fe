import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket';
import { LogService } from '../services/log.service';

import { Observable, of, from, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private url = environment.apiUrl + '/ticket';
  public className = '[TicketService] ';

  constructor(private logService: LogService, private httpClient: HttpClient) { }
  
  // Set up a way to advertise to observers that something happened
  private ticketsUpdatedSource = new Subject<string>();
  ticketsUpdated$ = this.ticketsUpdatedSource.asObservable();

  // call this after saving or deleting and so on
  announceTicketsUpdated(message: string) {
      this.ticketsUpdatedSource.next(message);
  }

  getTickets() {
    return this.httpClient.get<Ticket[]>(this.url);
  }

  getTicket(id: number) {
    return this.httpClient.get<Ticket>(this.url + '/' + `${id}`);
  }

  postTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(this.url, ticket);
  }

  updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.put<Ticket>(this.url + '/' + `${ticket.id}`, ticket);
  } 

  deleteTicket(id: number) {
    return this.httpClient.delete<Ticket>(this.url + '/' + `${id}`);
  }
}
