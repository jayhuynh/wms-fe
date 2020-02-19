import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wms-fe';

  constructor(private translator: TranslateService) {
    translator.setDefaultLang('en');
    translator.use('en');
  }
}
