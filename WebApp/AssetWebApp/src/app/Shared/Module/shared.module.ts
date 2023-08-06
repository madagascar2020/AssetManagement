import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SideMenuComponent } from '../Components/side-menu/side-menu.component';
import { HomeComponent } from '../Components/home/home.component';
import { ToolbarComponent } from '../Components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    SideMenuComponent,
    ToolbarComponent,

  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    RouterModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSliderModule,
    MatProgressBarModule,
  ],
  exports: [
    SideMenuComponent,
    ToolbarComponent,

  ]
 
})
export class SharedModule { }
