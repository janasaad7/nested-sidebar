import { Routes } from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {GeneralComponent} from './settings/general/general.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SellingOptionsComponent} from './settings/selling-options/selling-options.component';
import {roleGuard} from './role.guard';
import {featureFlagGuard} from './feature-flag.guard';
import {unsavedChangesGuard} from './unsaved-changes.guard';

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
        canActivate: [roleGuard],
        canMatch: [featureFlagGuard],
        canDeactivate: [unsavedChangesGuard],
        data: { roles: ['seller', 'admin'], features: ['selling-options'] }
      },
      { path: '', redirectTo: 'general', pathMatch: 'full' }
    ]
  }
];
