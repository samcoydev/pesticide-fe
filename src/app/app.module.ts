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
import { LogService } from './services/log.service';
import { SidebarComponent } from './_components/sidebar/sidebar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './_components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PriorityPipe } from './priority.pipe';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketComponent,
    CreateTicketComponent,
    DeleteTicketComponent,
    NavComponent,
    SidebarComponent,
    ProfileComponent,
    PriorityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
