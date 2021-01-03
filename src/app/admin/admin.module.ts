import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminOptionsComponent } from '../_components/adminoptions/adminoptions.component';
import { UserListComponent } from '../_components/user-list/user-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    TableModule
  ],
  declarations: [
    AdminOptionsComponent,
    UserListComponent
  ]
})
export class AdminModule { }
