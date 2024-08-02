import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material/material.module';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesDetailComponent } from './components/heroes-detail/heroes-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroesComponent, HeroesDetailComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule,
  ],
})
export class HeroesModule {}
