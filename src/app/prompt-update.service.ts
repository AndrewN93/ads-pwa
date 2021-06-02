import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject, concat, from, interval, merge, Subject } from 'rxjs';
import { filter, first, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromptUpdateService {
  public forceCheckUpdate$ = new BehaviorSubject(false);
  constructor(private updates: SwUpdate, appRef: ApplicationRef) {
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(6 * 60 * 60 * 1000);
    const forceCheckUpdate = this.forceCheckUpdate$.asObservable().pipe(filter((payload) => !!payload));
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    merge(everySixHoursOnceAppIsStable$, forceCheckUpdate)
      .pipe(
        filter(() => this.isEnabled()),
        mergeMap(() => from(updates.checkForUpdate()))
      ).subscribe();

  }

  acitvateUpdate() {
    if (!this.isEnabled()) {
      return;
    }
    this.updates.available.subscribe(() => {
      if (this.promptUser()) {
        this.updates.activateUpdate().then(() => document.location.reload());
      }
    });

    this.updates.unrecoverable.subscribe(event => {
      alert(
        `An error occurred that we cannot recover from:\n${event.reason}\n\n` +
        'Please reload the page.');
    });
  }

  promptUser() {
    return confirm('There is an update of the app available, please reload the page=)')
  }

  isEnabled() {
    return this.updates.isEnabled;
  }
}


