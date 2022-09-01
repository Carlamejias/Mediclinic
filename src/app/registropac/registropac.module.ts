import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistropacPageRoutingModule } from './registropac-routing.module';

import { RegistropacPage } from './registropac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistropacPageRoutingModule
  ],
  declarations: [RegistropacPage]
})
export class RegistropacPageModule {}
