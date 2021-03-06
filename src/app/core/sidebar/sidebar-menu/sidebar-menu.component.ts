import {Component, OnInit} from '@angular/core';
import {SidebarMenuItemModel} from '../../../shared/models/sidebar/sidebar-menu-item.model';
import {SidebarMenuChildItemModel} from '../../../shared/models/sidebar/sidebar-menu-child-item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  sidebarMenuHeader: string;
  sidebarMenuItems: SidebarMenuItemModel[] = [];

  constructor(public router: Router) {
    this.sidebarMenuHeader = 'sidebar.menu.title';
    this.sidebarMenuItems.push(
      new SidebarMenuItemModel('/dashboard', 'fa fa-dashboard', 'sidebar.menu.dashboard', []),
      new SidebarMenuItemModel('/users', 'fa fa-user', 'sidebar.menu.user', [])
    );
  }

  ngOnInit() {
  }

}
