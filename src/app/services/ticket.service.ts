import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket';

import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private url = 'http://localhost:3000/api/v1/ticket';

  constructor(private httpClient: HttpClient) { }
  
  getTickets() {
    return this.httpClient.get<Ticket[]>(this.url);
  }

  getTicket(id: number) {
    return this.httpClient.get<Ticket>(this.url + '/' + `${id}`);
  }

  postTicket(ticket: Ticket): Observable<Ticket> {
    console.log('test', ticket);
    return this.httpClient.post<Ticket>(this.url, ticket);
  }

  deleteTicket(id: number) {
    return this.httpClient.delete<Ticket>(this.url + '/' + `${id}`);
  }
}
