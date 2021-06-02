import { Component, OnInit } from '@angular/core';
import { PromptUpdateService } from './prompt-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ads-pwa';

  constructor(public promptUpdateService: PromptUpdateService) { }

  ngOnInit() {
    this.promptUpdateService.acitvateUpdate();
  }
}
