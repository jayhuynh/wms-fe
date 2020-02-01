import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() value: any;
  @Input() options: any;
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
