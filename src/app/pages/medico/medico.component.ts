import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { MapsAPILoader, MouseEvent } from '@agm/core';


@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {
    show = 1;
    hour = '';
    day = '';
    place = '';

    title: string = 'AGM project';
    latitude: number;
    longitude: number;
    zoom: number;
    address: string;
    private geoCoder;
    
    constructor(
        private _titleServices: TitleService,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
        ) {}

    ngOnInit(): void {
        this._titleServices.changeTitle('Solicitud de médico en casa');

        this.setCurrentLocation();
    }

    next(): void {
        this.show ++;
    }

    prev(): void {
        this.show --;
    }

    private setCurrentLocation() {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.zoom = 15;
          });
        }
    }

}
