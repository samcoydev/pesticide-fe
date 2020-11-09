import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOptionsComponent } from '../_components/adminoptions/adminoptions.component';
import { UserListComponent } from '../_components/user-list/user-list.component';

const routes: Routes = [
    { path: '', component: AdminOptionsComponent},
    { path: 'users', component: UserListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }