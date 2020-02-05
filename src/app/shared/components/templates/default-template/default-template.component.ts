import {Component, Input, OnInit} from '@angular/core';
import {Template} from '../template.name';

@Component({
  selector: 'app-default-template',
  templateUrl: './default-template.component.html',
  styleUrls: ['./default-template.component.scss']
})
export class DefaultTemplateComponent implements OnInit {

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
