import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IAdItem } from '../../ads.models';
import { AdsService } from '../../ads.service';

@Component({
  selector: 'app-single-ad-page',
  templateUrl: './single-ad-page.component.html',
  styleUrls: ['./single-ad-page.component.scss']
})
export class SingleAdPageComponent {
  public current$: Observable<IAdItem | null>;

  constructor(private adsService: AdsService, private route: ActivatedRoute) {
    const adId = this.route.snapshot.params.id;
    this.current$ = this.adsService.getSingleAd(adId);
  }
}
