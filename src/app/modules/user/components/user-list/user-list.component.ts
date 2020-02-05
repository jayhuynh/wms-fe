import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContentHeaderModel} from '../../../../shared/models/content-header/content-header.model';
import {TableModel} from '../../../../shared/models/table/table.model';
import {UserService} from '../../user.service';
import {Template} from '../../../../shared/components/templates/template.name';
import {RouteNames} from '../../../../route.name';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription;

  contentHeader: ContentHeaderModel;

  userTable: TableModel;

  constructor(private userService: UserService) {
    this.contentHeader = new ContentHeaderModel(
      'User List',
      'Small Title',
      [
        {routerLink: RouteNames.USERS, title: 'User'},
      ]
    );

    this.userTable = new TableModel(
      'User Table',
      [
        {name: 'Id', value: 'id', template: Template.LINK, options: {
            route: RouteNames.USERS,
            params: {
              id: 'id'
            }
          }},
        {name: 'Email', value: 'email', template: Template.LINK, options: {
            route: RouteNames.USERS,
            params: {
              id: 'id'
            }
          }},
        {name: 'Full Name', value: 'fullName', template: Template.LINK, options: {
            route: RouteNames.USERS,
            params: {
              id: 'id'
            }
          }},
        {name: 'Role', value: 'role', template: Template.DEFAULT},
        {name: 'Created At', value: 'createdAt', template: Template.DATETIME},
        {name: 'Updated At', value: 'updatedAt', template: Template.DATETIME}
      ],
      []
    );
  }

  ngOnInit() {
    this.userSubscription = this.userService.reloadUsers.subscribe(() => {
      this.userService.getUsers().subscribe((users: any[]) => {
        this.userTable.rows = users;
      });
    });

    this.userService.reloadUsers.next();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
