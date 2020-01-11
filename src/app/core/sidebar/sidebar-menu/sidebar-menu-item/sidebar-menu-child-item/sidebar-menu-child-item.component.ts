import {Component, Input, OnInit} from '@angular/core';
import { SidebarMenuChildItemModel } from '../../../../../shared/models/sidebar/sidebar-menu-child-item.model';

@Component({
  selector: '[app-sidebar-menu-child-item]',
  templateUrl: './sidebar-menu-child-item.component.html',
  styleUrls: ['./sidebar-menu-child-item.component.scss']
})
export class SidebarMenuChildItemComponent implements OnInit {

  @Input() data: SidebarMenuChildItemModel;

  constructor() { }

  ngOnInit() {
  }

}
