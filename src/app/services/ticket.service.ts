import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket';

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
}
