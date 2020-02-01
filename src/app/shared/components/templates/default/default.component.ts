import {Component, Input, OnInit} from '@angular/core';
import {Template} from '../template.name';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  @Input() data: {
    item: any,
    value: string,
    template: Template,
    options?: any
  };

  public template = Template;

  constructor() {
  }

  ngOnInit() {
  }

}
