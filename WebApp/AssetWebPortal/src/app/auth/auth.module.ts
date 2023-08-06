import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

// import {
//     PerfectScrollbarModule, 
//     PERFECT_SCROLLBAR_CONFIG,
//     PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { appRoutes } from './lazyloader.routes';

// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//     suppressScrollX: true
// };

import { DashboardCrmModule } from '../dashboard-crm/dashboard-crm.module';

import { CoreModule } from '../core/core.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { HighlightModule } from 'ngx-highlightjs';
import { TablesRouterModule } from '../tables/tables.router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        MatToolbarModule,
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

        DashboardCrmModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        CoreModule,
        MatSidenavModule,
        // PerfectScrollbarModule,
        NgScrollbarModule
    ],
    declarations: [AuthComponent],
    providers: [
        // {
        //     provide: PERFECT_SCROLLBAR_CONFIG,
        //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        // }
    ]
})
export class AuthModule { }
