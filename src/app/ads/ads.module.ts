import { NgModule } from '@angular/core';
import { adsModuleComponents, AdsRoutingModule } from './ads-routing.module';

@NgModule({
  declarations: [...adsModuleComponents],
  imports: [
    AdsRoutingModule
  ]
})
export class AdsModule { }
