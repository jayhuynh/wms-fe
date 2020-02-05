import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {SidebarComponent} from './core/sidebar/sidebar.component';
import {FooterComponent} from './core/footer/footer.component';
import {SidebarSearchBoxComponent} from './core/sidebar/sidebar-search-box/sidebar-search-box.component';
import {SidebarMenuComponent} from './core/sidebar/sidebar-menu/sidebar-menu.component';
import {SidebarMenuItemComponent} from './core/sidebar/sidebar-menu/sidebar-menu-item/sidebar-menu-item.component';
import {SidebarMenuHeaderComponent} from './core/sidebar/sidebar-menu/sidebar-menu-header/sidebar-menu-header.component';
import {SidebarMenuChildItemComponent} from './core/sidebar/sidebar-menu/sidebar-menu-item/sidebar-menu-child-item/sidebar-menu-child-item.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {UserListComponent} from './modules/user/components/user-list/user-list.component';
import {UserNewComponent} from './modules/user/components/user-new/user-new.component';
import {ContentHeaderComponent} from './shared/components/content-header/content-header.component';
import {ContentHeaderBreadcrumbItemComponent} from './shared/components/content-header/content-header-breadcrumb-item/content-header-breadcrumb-item.component';
import {TableComponent} from './shared/components/table/table.component';
import {HttpClientModule} from '@angular/common/http';
import {ModalComponent} from './shared/components/modal/modal.component';
import {LinkTemplateComponent} from './shared/components/templates/link-template/link-template.component';
import {DefaultTemplateComponent} from './shared/components/templates/default-template/default-template.component';
import {UserDetailComponent} from './modules/user/components/user-detail/user-detail.component';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { DatetimeTemplateComponent } from './shared/components/templates/datetime-template/datetime-template.component';

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
    DashboardComponent,
    UserListComponent,
    UserNewComponent,
    ContentHeaderComponent,
    ContentHeaderBreadcrumbItemComponent,
    TableComponent,
    ModalComponent,
    LinkTemplateComponent,
    DefaultTemplateComponent,
    UserDetailComponent,
    DatetimeTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
