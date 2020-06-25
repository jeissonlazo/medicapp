import { Component, OnInit } from '@angular/core';
import { Especialista } from '../../models/especialista';
import { Hour} from '../..//models/hour';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
    day = '';
    hour= '';
    show = 1;
    hourSelect = null;
    items = [
        new Especialista('Especialidad 1','../../../assets/images/kidney.png'),
        new Especialista('Especialidad 1','../../../assets/images/heart.png'),
        new Especialista('Especialidad 1','../../../assets/images/bone.png'),
        new Especialista('Especialidad 1','../../../assets/images/doctorradio.png'),
        new Especialista('Especialidad 1','../../../assets/images/stomach.png'),
        new Especialista('Especialidad 1','../../../assets/images/skeleton.png'),
        new Especialista('Especialidad 1','../../../assets/images/ear.png'),
        new Especialista('Especialidad 1','../../../assets/images/snellen.png'),
    ]
    hours = [
        new Hour('6:30 Am', '7:00 AM'),
        new Hour('7:00 Am', '7:30 AM'),
        new Hour('7:30 Am', '8:00 AM'),
        new Hour('8:00 Am', '8:30 AM'),
        new Hour('8:30 Am', '9:00 AM'),
        new Hour('9:00 Am', '9:30 AM'),
        new Hour('9:30 Am', '10:00 AM'),
        new Hour('10:00 Am', '10:30 AM'),
        new Hour('10:30 Am', '11:00 AM'),
        new Hour('11:00 Am', '11:30 AM'),
        new Hour('11:30 Am', '12:00 AM'),
    ]
    especialidad = new Especialista('', '');
    constructor(private _titleServices: TitleService) {}

    ngOnInit(): void {
        this._titleServices.changeTitle('Consulta de especialistas');
    }

    choose (item): void {
        this.especialidad = item;
        this.show ++;
    }

    next (): void {
        this.show ++;
    }

    prev (): void {
        this.show --;
    }

    choseHour (index, item): void {
        this.hour = item.start + ' - ' + item.end ;
        this.hourSelect = index;
    }

}
