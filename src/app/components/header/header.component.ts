import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { TitleService } from '../../services/title.service'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _location: Location, private _titleServices: TitleService) { }

    title:string; 
    ngOnInit(): void {
        this._titleServices.currentTitle.subscribe(message => this.title = message);
    }
  backClicked() {
    this._location.back();
  }
  
}
