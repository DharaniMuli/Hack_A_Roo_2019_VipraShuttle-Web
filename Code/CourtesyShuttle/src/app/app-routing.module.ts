import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddOrganizationComponent} from './SuperAdmin/add-organization/add-organization.component';
import {AddOrganizationAdminComponent} from './SuperAdmin/add-organization-admin/add-organization-admin.component';
import {AddDriverComponent} from './OrgAdmin/add-driver/add-driver.component';
import {AddshuttleComponent} from './OrgAdmin/addshuttle/addshuttle.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'addorganization', component: AddOrganizationComponent},
  { path: 'addorganizationadmincomponent', component: AddOrganizationAdminComponent},
  { path: 'adddrivercomponent', component: AddDriverComponent},
  { path: 'addshuttlecomponent', component: AddshuttleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
