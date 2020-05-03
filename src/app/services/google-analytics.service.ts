import {Injectable} from '@angular/core';

// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() {
  }

  public eventEmitter(eventCategory: string, eventLabel: string) {
    gtag('event', 'click', {
      eventCategory,
      eventLabel,
    });
  }
}
