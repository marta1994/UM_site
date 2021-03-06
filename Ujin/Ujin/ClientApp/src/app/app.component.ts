import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LocaleService } from 'angular-l10n';
import { Language } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  public deviceType: DeviceType;
  @Language() lang: string;

  constructor(
    private locale: LocaleService,
    http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<DeviceType>(baseUrl + 'api/userAgent/DetermineDeviceType').subscribe(result => {
      this.deviceType = result;
    }, error => console.error(error));
  }

  public showMobile(): boolean {
    return this.deviceType === DeviceType.Mobile;
  }

  public showDesktop(): boolean {
    return this.deviceType === DeviceType.Desktop || this.deviceType === DeviceType.Unknown;
  }

  public setEn() {
    this.locale.setCurrentLanguage('en');
  }

  public setUa() {
    this.locale.setCurrentLanguage('ua');
  }
}

enum DeviceType {
  Unknown = 0,
  Desktop = 1,
  Mobile = 2,
}
