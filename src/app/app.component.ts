import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PromptUpdateService } from './prompt-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ads-pwa';
  private readonly VAPID_PUBLIC_KEY = "BMTTQru_EJuKGWiCciMwIomIjhINKmoZg-BokCEYhf7iKl63oLAGRJPcaTLnrpH-GAR7b5PND12lrsGGcZQUUhs";

  constructor(
    public promptUpdateService: PromptUpdateService,
    private swPush: SwPush,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.promptUpdateService.acitvateUpdate();
  }

  subscribeOnPush() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => {
        console.log("Notification Subscription: ", sub);
        this.http.post('/api/notifications', sub).subscribe(
          () => console.log('Sent push subscription object to server.'),
          err => console.log('Could not send subscription object to server, reason: ', err)
        );
      })
      .catch(err => console.error("Could not subscribe to notifications", err));
  }

  sendPush() {
    this.http.post('/api/newsletter', {}).subscribe();
  }

}
