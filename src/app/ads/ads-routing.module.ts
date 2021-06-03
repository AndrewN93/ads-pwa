import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsCachedPageComponent } from './components/ads-cached-page/ads-cached-page.component';
import { AdsPageComponent } from './components/ads-page/ads-page.component';
import { SingleAdPageComponent } from './components/single-ad-page/single-ad-page.component';

export const adsModuleComponents = [
  AdsPageComponent,
  SingleAdPageComponent
];

const routes: Routes = [
  { path: '', redirectTo: 'ads', pathMatch: 'full' },
  { path: 'ads', component: AdsPageComponent },
  { path: 'ads-cached', component: AdsCachedPageComponent },
  { path: 'ads/:id', component: SingleAdPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsRoutingModule { }
