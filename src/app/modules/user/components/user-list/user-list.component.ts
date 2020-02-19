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
      'user.list.title',
      'user.list.small_title',
      [
        {routerLink: RouteNames.USERS, title: 'user.list.breadcrumb.1'},
      ]
    );

    this.userTable = new TableModel(
      'user.list.table.name',
      [
        {name: 'user.list.table.columns.id', value: 'id', template: Template.LINK, options: {
            route: RouteNames.USERS,
            params: {
              id: 'id'
            }
          }},
        {name: 'user.list.table.columns.email', value: 'email', template: Template.LINK, options: {
            route: RouteNames.USERS,
            params: {
              id: 'id'
            }
          }},
        {name: 'user.list.table.columns.full_name', value: 'fullName', template: Template.LINK, options: {
            route: RouteNames.USERS,
            params: {
              id: 'id'
            }
          }},
        {name: 'user.list.table.columns.role', value: 'role', template: Template.DEFAULT},
        {name: 'user.list.table.columns.created_at', value: 'createdAt', template: Template.DATETIME},
        {name: 'user.list.table.columns.updated_at', value: 'updatedAt', template: Template.DATETIME}
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
