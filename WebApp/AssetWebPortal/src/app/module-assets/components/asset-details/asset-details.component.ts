import { Component, OnInit } from '@angular/core';
import { AssetDetailsRequest } from '../../models/request/asset-details-request';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {

  model:AssetDetailsRequest = new AssetDetailsRequest();
  constructor() { }

  ngOnInit(): void {
  }

  Submit(){

  }
}
