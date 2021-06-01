import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdItem } from './ads.models';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient) { }

  public getAllAds(): Observable<IAdItem[]> {
    return this.http.get<{ ads: IAdItem[] }>('api/ads').pipe(map(res => res.ads));
  }
}
