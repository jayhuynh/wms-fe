import { Component, OnInit } from '@angular/core';
import {ContentHeaderModel} from '../../../../shared/models/content-header/content-header.model';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  contentHeader: ContentHeaderModel;

  constructor() {
    this.contentHeader = new ContentHeaderModel(
      'Create New User',
      'Small Title',
      [
        {routerLink: '/users', title: 'User'},
        {routerLink: '/users/new', title: 'Create New User'},
      ]
    );
  }

  ngOnInit() {
  }

}
