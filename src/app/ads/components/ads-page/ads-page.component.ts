import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdItem } from '../../ads.models';
import { AdsService } from '../../ads.service';

@Component({
  selector: 'app-ads-page',
  templateUrl: './ads-page.component.html',
  styleUrls: ['./ads-page.component.scss']
})
export class AdsPageComponent {
  public ads: Observable<IAdItem[]>;

  constructor(private adsService: AdsService) {
    this.ads = this.adsService.getAllAds();
  }

}
