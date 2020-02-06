import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {UserService} from '../../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../shared/components/alert/alert.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  confirmWindowModelRef: BsModalRef;

  constructor(
    private modelService: BsModalService,
    private userService: UserService,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
  }

  openConfirmWindow(template: TemplateRef<any>) {
    this.confirmWindowModelRef = this.modelService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.route.params
      .subscribe((params) => {
        this.userService
          .deleteUser(params.id)
          .subscribe((message) => {
            this.userService.reloadUsers.next();
            this.showAlert();
            this.hideAllModals();
          }, (error) => {
            console.log(error);
          })
        ;
      });
  }

  decline(): void {
    this.confirmWindowModelRef.hide();
  }

  private showAlert(): void {
    this.alertService.showAlert.next({
      type: this.alertService.types.SUCCESS,
      message: 'You have just deleted a user'
    });
  }

  private hideAllModals(): void {
    while (this.modelService.getModalsCount() > 0) {
      this.modelService.hide(this.modelService.getModalsCount());
    }
  }
}
