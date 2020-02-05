import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from './alert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  isHidden: boolean;

  type: string;

  message: string;

  alertSubscription: Subscription;

  constructor(private alertService: AlertService) {
    this.hide();
  }

  ngOnInit() {
    this.alertSubscription = this.alertService.showAlert
      .subscribe(({type, message}) => {
        this.type = type;
        this.message = message;
        this.show();
      });
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
  }

  hide(): void {
    this.isHidden = true;
  }

  show(): void {
    this.isHidden = false;
    setTimeout(() => {
      this.hide();
    }, 5000);
  }
}
