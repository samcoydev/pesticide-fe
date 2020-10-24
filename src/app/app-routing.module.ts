import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { TicketListComponent } from './_components/ticket-list/ticket-list.component';
import { TicketComponent } from './_components/ticket/ticket.component';

import { CreateTicketComponent } from './_components/create-ticket/create-ticket.component';
import { DeleteTicketComponent } from './_components/delete-ticket/delete-ticket.component';

import { AuthGuard } from '../app/_helpers/auth.guard';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: '', component: CreateTicketComponent, canActivate: [AuthGuard] },

  { path: 'ticket-list', component: TicketListComponent, canActivate: [AuthGuard] },
  { path: 'ticket', component: TicketComponent, canActivate: [AuthGuard] },
  { path: 'ticket/:ticketId', component: TicketComponent, canActivate: [AuthGuard] }, 
  { path: 'create-ticket', component: CreateTicketComponent, canActivate: [AuthGuard] },
  { path: 'delete-ticket', component: DeleteTicketComponent, canActivate: [AuthGuard] },

  { path: 'account', loadChildren: accountModule },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }