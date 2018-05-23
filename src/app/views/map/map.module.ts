import { NgModule } from '@angular/core';

import { DxVectorMapModule } from 'devextreme-angular';
import { MapComponent } from './map.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MapRoutingModule } from './map.routing.module';

import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
      CommonModule,
      DxVectorMapModule,
      MapRoutingModule
  ],
  declarations: [MapComponent],

})
export class MapModule { }


