import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    title: string;
    constructor(private _titleServices: TitleService) { }

    ngOnInit(): void {
        this._titleServices.currentTitle.subscribe(message => this.title = message);
        this._titleServices.changeTitle('.');
    }

}
