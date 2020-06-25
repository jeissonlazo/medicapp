import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service'

@Component({
  selector: 'app-cita-fecha',
  templateUrl: './cita-fecha.component.html',
  styleUrls: ['./cita-fecha.component.scss'],
})
export class CitaFechaComponent implements OnInit {

    day = '';
    hour = '';
    show = 1;
    title: string; 
  
    constructor(private _titleServices: TitleService) {}
  
    ngOnInit() {
        this._titleServices.currentTitle.subscribe(message => this.title = message);
        this._titleServices.changeTitle('Selecione la fecha deseada');
    }

    plus () {
        this.show ++;
    }
    subtract () {
        this.show --;
    }
    

}
