import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxVectorMapModule } from 'devextreme-angular';
import { projection } from 'devextreme/viz/vector_map/projection';

import { FeatureCollection, MapService } from '../../_services/map.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({

  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})


export class MapComponent implements OnInit  {
    pangaeaBorders: FeatureCollection;
    pangaeaContinents: FeatureCollection;
    projection: any;
    
    constructor(service: MapService) {
        this.pangaeaBorders = service.getPangaeaBorders();
        this.pangaeaContinents = service.getPangaeaContinents();
        this.projection = projection({
            to: function (coordinates) {
                return [coordinates[0] / 100, coordinates[1] / 100];
            },
        
            from: function (coordinates) {
                return [coordinates[0] * 100, coordinates[1] * 100];
            }
        });
    }

    customizeLayer(elements) {
        elements.forEach(function (element) {
            element.applySettings({
                color: element.attribute("color")
            });
        });
    };
    ngOnInit() {
    }
}


