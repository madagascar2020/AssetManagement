import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import { AssetListComponent } from '../module-assets/components/asset-list/asset-list.component';
import { AssetDetailsComponent } from '../module-assets/components/asset-details/asset-details.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path:'asset-list',component:AssetListComponent},
        { path:'asset-details',component:AssetDetailsComponent},
        { path: 'dashboard', component: DashboardCrmComponent },
        { path: 'material-widgets', loadChildren: () => import('../material-widgets/material-widgets.module').then(m => m.MaterialWidgetsModule) },
        { path: 'tables', loadChildren: () => import('../tables/tables.module').then(m => m.TablesModule) },
        { path: 'maps', loadChildren: () => import('../maps/maps.module').then(m => m.MapsModule) },
        { path: 'charts', loadChildren: () => import('../charts/charts.module').then(m => m.ChartsModule) },
        // { path: 'chats', loadChildren: () => import('../chats/chat.module').then(m => m.ChatsModule) }, // fix this
        //{ path: 'mail', loadChildren: () => import('../mail/mail.module').then(m => m.MailModule) }, // fix this
        { path: 'pages', loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule) },
        { path: 'forms', loadChildren: () => import('../forms/forms.module').then(m => m.FormModule) }, //fix this
        { path: 'guarded-routes', loadChildren: () => import('../guarded-routes/guarded-routes.module').then(m => m.GuardedRoutesModule) },
        // { path: 'editor', loadChildren: () => import('../editor/editor.module').then(m => m.EditorModule) }, 
        { path: 'scrumboard', loadChildren: () => import('../scrumboard/scrumboard.module').then(m => m.ScrumboardModule) },
    ]
}];
