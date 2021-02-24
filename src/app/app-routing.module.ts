import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {ListUserComponent} from './list-user/list-user.component';

const routes: Routes = [
  {path : 'login', component: RegisterComponent},
  {path : 'user', component: ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
