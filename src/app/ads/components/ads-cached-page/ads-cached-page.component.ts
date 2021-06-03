import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdItem } from '../../ads.models';
import { AdsService } from '../../ads.service';

@Component({
  selector: 'app-ads-cached-page',
  templateUrl: './ads-cached-page.component.html',
  styleUrls: ['./ads-cached-page.component.scss']
})
export class AdsCachedPageComponent {
  public adsCached$: Observable<IAdItem[]>;

  constructor(private adsService: AdsService) {
    this.adsCached$ = this.adsService.getAllAdsCached();
  }
}
