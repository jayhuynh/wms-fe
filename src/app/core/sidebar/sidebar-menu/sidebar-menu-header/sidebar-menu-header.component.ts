import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-sidebar-menu-header]',
  templateUrl: './sidebar-menu-header.component.html',
  styleUrls: ['./sidebar-menu-header.component.scss'],
  host: {'class': 'header'}
})
export class SidebarMenuHeaderComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
