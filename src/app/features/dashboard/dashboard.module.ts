import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { ActivityCardComponent } from './activity-card/activity-card.component';


@NgModule({
	declarations: [
		DashboardLayoutComponent,
		DashboardTableComponent,
		ActivityCardComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		SharedModule,
		CoreModule
	]
})
export class DashboardModule { }
