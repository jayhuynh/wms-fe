import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './modules/user/default/user.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {UserListComponent} from './modules/user/components/user-list/user-list.component';
import {UserNewComponent} from './modules/user/components/user-new/user-new.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'users', component: UserComponent, children: [
      {path: '', component: UserListComponent},
      {path: 'new', component: UserNewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
