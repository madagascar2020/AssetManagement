import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'ngx-highlightjs';
import { TablesRouterModule } from '../tables/tables.router';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


export const appRoutes: Routes = [
  {path:'asset-list',component:AssetListComponent , data: { animation: 'asset-list' }},
];
@NgModule({
  declarations: [
    AssetListComponent,
    AssetDetailsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    HighlightModule,
    TablesRouterModule,
    ScrollingModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class AssetsModule { }
