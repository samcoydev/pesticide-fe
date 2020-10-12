import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { DeleteTicketComponent } from './delete-ticket/delete-ticket.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'ticket', component: TicketComponent},
      {path: 'ticket/:ticketId', component: TicketComponent}, 
      {path: 'create-ticket', component: CreateTicketComponent},
      {path: 'delete-ticket', component: DeleteTicketComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }