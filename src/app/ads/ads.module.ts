import { NgModule } from '@angular/core';
import { adsModuleComponents, AdsRoutingModule } from './ads-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [...adsModuleComponents],
  imports: [
    AdsRoutingModule,
    MatCardModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
  ]
})
export class AdsModule { }
