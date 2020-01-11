import {Component, OnInit} from '@angular/core';
import {SidebarMenuItemModel} from '../../../shared/models/sidebar/sidebar-menu-item.model';
import {SidebarMenuChildItemModel} from '../../../shared/models/sidebar/sidebar-menu-child-item.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  sidebarMenuHeader: string;
  sidebarMenuItems: SidebarMenuItemModel[] = [];

  constructor() {
    this.sidebarMenuHeader = 'MAIN NAVIGATION';
    this.sidebarMenuItems.push(
      new SidebarMenuItemModel('/', 'fa fa-dashboard', 'Normal Link', []),
      new SidebarMenuItemModel('/', 'fa fa-share', 'Multilevel', [
        new SidebarMenuChildItemModel('/', 'fa fa-circle-o', 'Level 1', [
          new SidebarMenuChildItemModel('/', 'fa fa-circle-o', 'Level 2', [
            new SidebarMenuChildItemModel('/', 'fa fa-circle-o', 'Level 3', []),
            new SidebarMenuChildItemModel('/', 'fa fa-circle-o', 'Level 3', [])
          ]),
          new SidebarMenuChildItemModel('/', 'fa fa-circle-o', 'Level 2', [])
        ]),
        new SidebarMenuChildItemModel('/', 'fa fa-circle-o', 'Level 1', [])
      ])
    );
  }

  ngOnInit() {
  }

}
