import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    //DashboardRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    //SharedModule,
  ],
})
export class DashboardModule {}
