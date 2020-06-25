import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

    private title = new BehaviorSubject<string>('basicTitle');
    currentTitle = this.title.asObservable();
    constructor() { }

    changeTitle(value: string) {
        this.title.next(value);
    }
}
