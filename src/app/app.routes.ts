import { Routes } from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {GeneralComponent} from './settings/general/general.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SellingOptionsComponent} from './settings/selling-options/selling-options.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'selling-options',
        component: SellingOptionsComponent,
      },
      { path: '', redirectTo: 'general', pathMatch: 'full' }
    ]
  }
];
