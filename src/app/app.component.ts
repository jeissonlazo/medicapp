import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    //@ViewChild(ChildCmp) child:ChildCmp;
    title = 'medicapp';

    deletePhone(e): void{
        console.log(e)
    }
}
