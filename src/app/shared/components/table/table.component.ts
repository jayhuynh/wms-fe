import {Component, Input, OnInit} from '@angular/core';
import {TableModel} from '../../models/table/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: TableModel;

  constructor() {
  }

  ngOnInit() {
  }

}
