import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { BusinessProfileComponent } from './components/business-profile/business-profile.component';
import { BSettingsComponent } from './components/b-settings/b-settings.component';


@NgModule({
  declarations: [
    BusinessProfileComponent,
    BSettingsComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
