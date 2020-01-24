import {Component, OnInit} from '@angular/core';
import {ContentHeaderModel} from '../../../../shared/models/content-header/content-header.model';
import {TableModel} from '../../../../shared/models/table/table.model';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  contentHeader: ContentHeaderModel;

  userTable: TableModel;

  constructor(private userService: UserService) {
    this.contentHeader = new ContentHeaderModel(
      'User List',
      'Small Title',
      [
        {routerLink: '/users', title: 'User'},
        {routerLink: '/users', title: 'User List'},
      ]
    );

    this.userTable = new TableModel(
      'User Table',
      [
        {name: 'Id', value: 'id'},
        {name: 'Email', value: 'email'},
        {name: 'Full Name', value: 'fullName'},
        {name: 'Role', value: 'role'},
        {name: 'Created At', value: 'createdAt'},
        {name: 'Updated At', value: 'updatedAt'}
      ],
      []
    );
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.userTable.rows = users;
    });
  }

}
