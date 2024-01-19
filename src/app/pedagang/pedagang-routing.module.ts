import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedagangPage } from './pedagang.page';

const routes: Routes = [
  {
    path: '',
    component: PedagangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedagangPageRoutingModule {}
