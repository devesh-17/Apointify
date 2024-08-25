import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardOverviewComponent } from './components/dashboard-overview/dashboard-overview.component';
import { BusinessProfileComponent } from './components/modules/manage/components/business-profile/business-profile.component';
import { BSettingsComponent } from './components/modules/manage/components/b-settings/b-settings.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardOverviewComponent
      },
      {
        path: 'manage',
        loadChildren: () => import('./components/modules/manage/manage.module').then(m => m.ManageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
