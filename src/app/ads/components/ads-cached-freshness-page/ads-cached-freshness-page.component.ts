import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdItem } from '../../ads.models';
import { AdsService } from '../../ads.service';

@Component({
  selector: 'app-ads-cached-freshness-page',
  templateUrl: './ads-cached-freshness-page.component.html',
  styleUrls: ['./ads-cached-freshness-page.component.scss']
})
export class AdsCachedFreshnessPageComponent {
  public adsCachedFreshness$: Observable<IAdItem[]>;

  constructor(private adsService: AdsService) {
    this.adsCachedFreshness$ = this.adsService.getAllAdsCachedFreshness();
  }
}
