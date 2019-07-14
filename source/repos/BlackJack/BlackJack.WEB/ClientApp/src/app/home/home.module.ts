import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from 'src/app/home/home-routing.module';
import { HomeComponent } from 'src/app/home/home.component';
import { MainPageComponent } from 'src/app/home/pages/main-page/main-page.component';
@NgModule({
  declarations: [HomeComponent, MainPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
