import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './core/dashboard/dashboard.component';
import {UserListComponent} from './modules/user/components/user-list/user-list.component';
import {UserNewComponent} from './modules/user/components/user-new/user-new.component';
import {UserDetailComponent} from './modules/user/components/user-detail/user-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'users', component: UserListComponent, children: [
      {path: 'new', component: UserNewComponent},
      {path: ':id', component: UserDetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
