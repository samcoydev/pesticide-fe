import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './_components/ticket-list/ticket-list.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TicketComponent } from './_components/ticket/ticket.component';
import { CreateTicketComponent } from './_components/create-ticket/create-ticket.component';
import { DeleteTicketComponent } from './_components/delete-ticket/delete-ticket.component';
import { NavComponent } from './_components/nav/nav.component';

import { ErrorInterceptor } from './_helpers/error.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketComponent,
    CreateTicketComponent,
    DeleteTicketComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
