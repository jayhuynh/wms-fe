import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  confirmWindowModelRef: BsModalRef;

  constructor(private modelService: BsModalService) {
  }

  ngOnInit() {
  }

  openConfirmWindow(template: TemplateRef<any>) {
    this.confirmWindowModelRef = this.modelService.show(template, {class: 'modal-sm'});
  }

}
