import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-datetime-template',
  templateUrl: './datetime-template.component.html',
  styleUrls: ['./datetime-template.component.scss']
})
export class DatetimeTemplateComponent implements OnInit {

  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
