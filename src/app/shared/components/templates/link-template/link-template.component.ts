import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-link-template',
  templateUrl: './link-template.component.html',
  styleUrls: ['./link-template.component.scss']
})
export class LinkTemplateComponent implements OnInit {

  @Input() value: any;
  @Input() options: any;
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
