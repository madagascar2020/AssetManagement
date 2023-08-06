import { Component, OnInit } from '@angular/core';
import { AssetdataserviceService } from '../Shared/Services/assetdataservice.service';
import { AssetDataResponse } from '../Shared/Models/asset-data-response';
import { SearchFilter } from '../Shared/Models/search-filter';

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss']
})

export class DashboardCrmComponent implements OnInit {
    filter:SearchFilter=new SearchFilter();  
assetsData : AssetDataResponse[] = []

    public dashCard = [
        { colorDark: '#5f9ea0', colorLight: '#7986CB', number: 1221, title: 'SALES', icon: 'local_grocery_store' },
        { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 1221, title: 'LEADS', icon: 'new_releases' },
        { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 1221, title: 'ASSETS', icon: 'assignments' },
        { colorDark: '#66BB6A', colorLight: '#81C784', number: 1221, title: 'BANKING', icon: 'account_balance' }
    ];

    tableData = [
        { country: 'India', sales: 5400, percentage: '40%' },
        { country: 'Us', sales: 3200, percentage: '30.33%' },
        { country: 'Australia', sales: 2233, percentage: '18.056%' },
        { country: 'Spaim', sales: 600, percentage: '6%' },
        { country: 'China', sales: 200, percentage: '4.50%' },
        { country: 'Brazil', sales: 100, percentage: '2.50%' },
    ];

    constructor(private _AssetService:AssetdataserviceService) { }

    ngOnInit() {
        this.GetAssets();
    }

    GetAssets(){
        this._AssetService.GetAssets(this.filter).subscribe(s =>{
            this.assetsData = s;
        });
    }


    }

