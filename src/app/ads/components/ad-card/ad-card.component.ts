import { Component, Input, OnInit } from '@angular/core';
import { IAdItem } from '../../ads.models';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})
export class AdCardComponent {
  @Input() ad: IAdItem | null = null;
}
