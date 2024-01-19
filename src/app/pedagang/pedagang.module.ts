import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedagangPageRoutingModule } from './pedagang-routing.module';

import { PedagangPage } from './pedagang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedagangPageRoutingModule
  ],
  declarations: [PedagangPage]
})
export class PedagangPageModule {}
