import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public types = {
    SUCCESS: 'alert-success',
    WARNING: 'alert-warning',
    INFO: 'alert-info',
    DANGER: 'alert-info'
  };

  public showAlert = new Subject<{ type: string, message: string }>();

  constructor() {
  }
}
