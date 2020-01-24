import {Component, OnInit} from '@angular/core';
import {ContentHeaderModel} from '../../shared/models/content-header/content-header.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  contentHeader: ContentHeaderModel;

  constructor() {
    this.contentHeader = new ContentHeaderModel(
      'Dashboard',
      'Small Title',
      [
        {routerLink: '/dashboard', title: 'Dashboard'},
      ]
    );
  }

  ngOnInit() {
  }

}
