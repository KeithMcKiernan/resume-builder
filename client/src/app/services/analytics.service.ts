import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from './../../environments/environment';
import { filter } from 'rxjs/operators';

declare const ga: any;

@Injectable()
export class AnalyticsService {

  constructor(private _router: Router, private _location: Location) {
    ga('create', `${environment.gaTrackingId}`, 'auto');
    this._router.events
      .pipe(filter((evt) => evt instanceof NavigationEnd))
      .subscribe(() => ga('send', { hitType: 'pageview', page: _location.path() }));
  }

  public emitEvent = (...evtArgs: any[]) => {
    ga('send', 'event', { ...evtArgs });
  }
}
