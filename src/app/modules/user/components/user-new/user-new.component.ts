import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {UserService} from '../../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../shared/components/alert/alert.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {RouteNames} from '../../../../route.name';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit, OnDestroy {
  // Observable for destroy order observable
  destroy: Subject<boolean> = new Subject<boolean>();
  userNewModalRef: BsModalRef;
  signupForm: FormGroup;
  confirmWindowModelRef: BsModalRef;

  @ViewChild('userNew', {static: true}) userNew: ElementRef;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        password: new FormControl(null, [Validators.required]),
        fullName: new FormControl(null, [Validators.required]),
        role: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
    });
    this.userNewModalRef = this.modalService.show(this.userNew);


    this.modalService.onHidden
      .pipe(takeUntil(this.destroy))
      .subscribe((reason) => {
        // Check the case if we have the confirm window modal over user detail modal
        // If we hide the confirm window we still have the user detail modal
        if (this.modalService.getModalsCount() === 0) {
          this.router.navigateByUrl(RouteNames.USERS);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  openConfirmWindow(template: TemplateRef<any>) {
    this.confirmWindowModelRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  //
  confirm(): void {
    this.userService.newUser(this.signupForm.value.userData)
      .subscribe((message) => {
        this.userService.reloadUsers.next();
        console.log(message);
      });

    this.showAlert();
    this.hideAllModals();
    // this.signupForm.reset();
  }

  decline(): void {
    this.confirmWindowModelRef.hide();
  }

  private showAlert(): void {
    this.alertService.showAlert.next({
      type: this.alertService.types.SUCCESS,
      message: 'You have just created a new user'
    });
  }

  private hideAllModals(): void {
    while (this.modalService.getModalsCount() > 0) {
      this.modalService.hide(this.modalService.getModalsCount());
    }
  }

}
