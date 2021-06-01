import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsPageComponent } from './components/ads-page/ads-page.component';

export const adsModuleComponents = [
  AdsPageComponent
];

const routes: Routes = [
  { path: '', component: AdsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsRoutingModule { }
