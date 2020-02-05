import {Component, Input, OnInit} from '@angular/core';
import {TableModel} from '../../models/table/table.model';
import {Template} from '../templates/template.name';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: TableModel;

  public template = Template;

  constructor() {
  }

  ngOnInit() {
  }

}
