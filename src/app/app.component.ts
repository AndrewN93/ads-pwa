import { Component } from '@angular/core';
import { PromptUpdateService } from './prompt-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ads-pwa';

  constructor(promptUpdateService: PromptUpdateService) { }
}
