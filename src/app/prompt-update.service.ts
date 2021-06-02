import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PromptUpdateService {
  constructor(updates: SwUpdate) {
    updates.available.subscribe(() => {
      if (this.promptUser()) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  promptUser() {
    return confirm('There is an update of the app available, please reload the page=)')
  }
}


