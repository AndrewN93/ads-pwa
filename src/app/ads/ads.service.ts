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

  public getAllAdsCached(): Observable<IAdItem[]> {
    return this.http.get<{ ads: IAdItem[] }>('api/ads-cached').pipe(map(res => res.ads));
  }

  public getSingleAd(id: number): Observable<IAdItem | null> {
    return this.http.get<{ ad: IAdItem | null }>(`api/ads/${id}`).pipe(map(res => res.ad));
  }
}
