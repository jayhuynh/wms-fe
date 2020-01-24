import {Component, Input, OnInit} from '@angular/core';
import {SidebarMenuChildItemModel} from '../../../models/sidebar/sidebar-menu-child-item.model';

@Component({
  selector: '[app-content-header-breadcrumb-item]',
  templateUrl: './content-header-breadcrumb-item.component.html',
  styleUrls: ['./content-header-breadcrumb-item.component.scss']
})
export class ContentHeaderBreadcrumbItemComponent implements OnInit {

  @Input() data: {routerLink: string, title: string};

  constructor() { }

  ngOnInit() {
  }

}
