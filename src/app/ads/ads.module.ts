import { NgModule } from '@angular/core';
import { adsModuleComponents, AdsRoutingModule } from './ads-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AdsCachedPageComponent } from './components/ads-cached-page/ads-cached-page.component';
import { AdCardComponent } from './components/ad-card/ad-card.component';

@NgModule({
  declarations: [...adsModuleComponents, AdsCachedPageComponent, AdCardComponent],
  imports: [
    AdsRoutingModule,
    MatCardModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
  ]
})
export class AdsModule { }
