import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistropacPage } from './registropac.page';

const routes: Routes = [
  {
    path: '',
    component: RegistropacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistropacPageRoutingModule {}
