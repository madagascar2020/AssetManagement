import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Shared/Components/home/home.component';
import { SideMenuComponent } from './Shared/Components/side-menu/side-menu.component';

const routes: Routes = [
  { path:'home',component:HomeComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
