import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';


@NgModule({
  declarations: [UserListComponent, UserNewComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
