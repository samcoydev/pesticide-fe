import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

import { HttpClientModule } from '@angular/common/http';
import { TicketComponent } from './ticket/ticket.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { DeleteTicketComponent } from './delete-ticket/delete-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketComponent,
    CreateTicketComponent,
    DeleteTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
