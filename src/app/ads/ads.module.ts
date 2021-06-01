import { NgModule } from '@angular/core';
import { adsModuleComponents, AdsRoutingModule } from './ads-routing.module';
import { SingleAdPageComponent } from './components/single-ad-page/single-ad-page.component';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [...adsModuleComponents, SingleAdPageComponent],
  imports: [
    AdsRoutingModule,
    MatCardModule,
    CommonModule,
    HttpClientModule,
  ]
})
export class AdsModule { }
