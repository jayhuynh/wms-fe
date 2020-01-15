import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './default/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserNewComponent } from './components/user-new/user-new.component';


@NgModule({
  declarations: [UserComponent, UserListComponent, UserNewComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
