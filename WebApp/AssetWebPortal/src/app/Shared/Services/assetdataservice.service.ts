import { Injectable } from '@angular/core';
import { UrlsConfiguration } from '../Urls/Urls.config';
import { HttpClient } from '@angular/common/http';
import { AssetDataResponse } from '../Models/asset-data-response';
import { SearchFilter } from '../Models/search-filter';

@Injectable({
  providedIn: 'root'
})
export class AssetdataserviceService {

  constructor(private http: HttpClient) { }


  GetAssets(filter:SearchFilter) {
    let url = UrlsConfiguration.EndPoints.AssetsApi +
      UrlsConfiguration.urls.Asset.GetAssets ;
    return this.http.post<AssetDataResponse[]>(url,filter);
  }

}
