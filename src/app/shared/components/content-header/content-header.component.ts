import {Component, Input, OnInit} from '@angular/core';
import {ContentHeaderModel} from '../../models/content-header/content-header.model';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  @Input() data: ContentHeaderModel;

  constructor() { }

  ngOnInit() {
  }

}
