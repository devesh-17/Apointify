import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NavBarComponent } from './admin-layout/nav-bar/nav-bar.component';
import { NavigationComponent } from './admin-layout/navigation/navigation.component';
import { SharedModule } from '../../shared/shared.module';
import { NavLeftComponent } from './admin-layout/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './admin-layout/nav-bar/nav-right/nav-right.component';
import { NavContentComponent } from './admin-layout/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './admin-layout/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './admin-layout/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './admin-layout/navigation/nav-content/nav-item/nav-item.component';
import { DashboardOverviewComponent } from './components/dashboard-overview/dashboard-overview.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    NavBarComponent,
    NavigationComponent,
    NavLeftComponent,
    NavRightComponent,
    NavContentComponent,
    NavCollapseComponent,
    NavGroupComponent,
    NavItemComponent,
    DashboardOverviewComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
