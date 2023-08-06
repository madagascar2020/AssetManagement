import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AssetDataResponse } from '../../../Shared/Models/asset-data-response';
import {fromEvent as observableFromEvent,  Observable} from 'rxjs';
import { forkJoin } from 'rxjs';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AssetdataserviceService } from '../../../Shared/Services/assetdataservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { SearchFilter } from '../../../Shared/Models/search-filter';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  searchFilter:SearchFilter = new SearchFilter();
  selection = new SelectionModel<number>(true, []);
  assetList : AssetDataResponse[] = [] ;
	displayedColumns = ['select', 'Code', 'Description', 'Quantity', 'PurchaseDate' , 'Value' , 'Tag'];
  PageSize = 20;
  CurrentPageIndex = 0 ;
  public dataSource = new MatTableDataSource<AssetDataResponse>();

  constructor(
    private _AssetService:AssetdataserviceService,
    public _Router: Router
    ) { }
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<AssetDataResponse>();
    this.getAssetList(this.searchFilter);
    observableFromEvent(this.filter.nativeElement, 'keyup').pipe(
         debounceTime(150),distinctUntilChanged(),)
        .subscribe(() => {
          if (!this.dataSource) { return; }
          
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }

  resetFilters(){
    console.log(this.CurrentPageIndex);
    this.searchFilter.PageIndex = this.CurrentPageIndex;
    this.searchFilter.PageSize = this.PageSize;
  }

  getAssetList(filter:SearchFilter){
    this.resetFilters();
    forkJoin([  
      this._AssetService.GetAssets(filter)]).subscribe(
      ([res1]) =>{
            // GetCountofResults
            // GetResults
            this.dataSource.data = res1;
            this.assetList = res1;
      }
    );
  }

  isAllSelected(): boolean {
    if (!this.dataSource) { return false; }
    if (this.selection.isEmpty()) { return false; }

    if (this.filter.nativeElement.value) {
      return this.selection.selected.length == this.dataSource.data.length;
    } else {
      return this.selection.selected.length == this.assetList.length;
    }
  }

  masterToggle() {
    if (!this.dataSource) { return; }
    if (this.isAllSelected()) {
      this.selection.clear();
    } else if (this.filter.nativeElement.value) {
      this.dataSource.data.forEach(data => this.selection.select(data.assetID));
    } else {
      this.assetList.forEach(data => this.selection.select(data.assetID));
    }
  }

  gotoAddNew(){
    this._Router.navigate(['/home/asset-details']);
  }


  onPaginateChange(event:any){
    this.CurrentPageIndex = this.CurrentPageIndex + 1 ;
    this.getAssetList(this.searchFilter);
  }

  onScroll(event:any){

  }


}
