import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {BsModalService, BsModalRef} from 'ngx-bootstrap';
import {ModalComponent} from '../../../../shared/components/modal/modal.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {RouteNames} from '../../../../route.name';
import {UserService} from '../../user.service';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  // Observable for destroy order observable
  destroy: Subject<boolean> = new Subject<boolean>();

  userDetailModalRef: BsModalRef;

  user: any;

  @ViewChild('userDetail', {static: true}) userDetail: ElementRef;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.destroy))
      .subscribe((params) => {
        this.userService
          .getUser(params.id)
          .subscribe((user: any) => {
            this.user = user;
            this.userDetailModalRef = this.modalService.show(this.userDetail);
          })
        ;
      })
    ;

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
}
