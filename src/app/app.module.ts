import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarSearchBoxComponent } from './core/sidebar/sidebar-search-box/sidebar-search-box.component';
import { SidebarMenuComponent } from './core/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from './core/sidebar/sidebar-menu/sidebar-menu-item/sidebar-menu-item.component';
import { SidebarMenuHeaderComponent } from './core/sidebar/sidebar-menu/sidebar-menu-header/sidebar-menu-header.component';
import { SidebarMenuChildItemComponent } from './core/sidebar/sidebar-menu/sidebar-menu-item/sidebar-menu-child-item/sidebar-menu-child-item.component';
import { UserComponent } from './modules/user/default/user.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { UserListComponent } from './modules/user/components/user-list/user-list.component';
import { UserNewComponent } from './modules/user/components/user-new/user-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidebarSearchBoxComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent,
    SidebarMenuHeaderComponent,
    SidebarMenuChildItemComponent,
    UserComponent,
    DashboardComponent,
    UserListComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
