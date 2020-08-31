import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private url = 'http://localhost:3000/api/v1/ticket';

  constructor(private httpClient: HttpClient) { }
  
  getTickets() {
    return this.httpClient.get(this.url);
  }
}
