import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TicketListComponent } from './ticket-list/ticket-list.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'ticket-list', component: TicketListComponent},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }