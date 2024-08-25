import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessProfileComponent } from './components/business-profile/business-profile.component';
import { BSettingsComponent } from './components/b-settings/b-settings.component';

const routes: Routes = [
  {
    path: 'profile',
    component: BusinessProfileComponent
  },
  {
    path: 'settings',
    component: BSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule {}
