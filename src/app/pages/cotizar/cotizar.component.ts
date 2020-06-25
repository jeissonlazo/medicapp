import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';

export interface PeriodicElement {
    parametro: string;
    value: number;
}
  
const ELEMENT_DATA: PeriodicElement[] = [
    {parametro: 'parametro 1', value: 100000},
    {parametro: 'parametro 2', value: 100000},
    {parametro: 'parametro 3', value: 100000},
    {parametro: 'parametro 4', value: 100000},
    {parametro: 'parametro 5', value: 100000},
    {parametro: 'parametro 6', value: 100000},
    {parametro: 'parametro 7', value: 100000},
    {parametro: 'parametro 8', value: 100000},
];


@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.scss']
})
export class CotizarComponent implements OnInit {
    selected = '';
    selected1 = '';
    selected2 = '';
    selected3 = '';
    selected4 = '';
    selected5 = '';
    selected6 = '';
    selected7 = '';
    selected8 = '';

    show = 1;
    total = 10000000;

    displayedColumns: string[] = ['parametro', 'value'];
    dataSource = ELEMENT_DATA;

    constructor(private _titleServices: TitleService) {}

    ngOnInit(): void {
        this._titleServices.changeTitle('Cotizar servicios de cirugía');
    }

    next(): void {
        this.show ++;
    }

    change (){
        console.log('test');
        this.show ++;
    }

}
