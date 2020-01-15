import { Component, OnInit } from '@angular/core';
import {ContentHeaderModel} from '../../../../shared/models/content-header/content-header.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  contentHeader: ContentHeaderModel;

  constructor() {
    this.contentHeader = new ContentHeaderModel(
      'User List',
      'Small Title',
      [
        {routerLink: '/users', title: 'User'},
        {routerLink: '/users', title: 'User List'},
      ]
    );
  }

  ngOnInit() {
  }

}
