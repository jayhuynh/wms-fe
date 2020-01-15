import {Component, ElementRef, Input, OnInit} from '@angular/core';
import { SidebarMenuItemModel } from '../../../../shared/models/sidebar/sidebar-menu-item.model';
import {Router} from '@angular/router';

@Component({
  selector: '[app-sidebar-menu-item]',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.scss'],
})
export class SidebarMenuItemComponent implements OnInit {

  @Input() data: SidebarMenuItemModel;

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
