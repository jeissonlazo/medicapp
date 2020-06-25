import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { CitaFechaComponent } from './pages/cita-fecha/cita-fecha.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// service 
import { TitleService } from './services/title.service';

//material components
import {MatInputModule} from '@angular/material/input';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { TimePikerComponent } from './components/time-piker/time-piker.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { CotizarComponent } from './pages/cotizar/cotizar.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MedicoComponent } from './pages/medico/medico.component';

// map
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitaFechaComponent,
    HeaderComponent,
    FooterComponent,
    TimePikerComponent,
    ConsultasComponent,
    CotizarComponent,
    MedicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    MatStepperModule,
    NgxMaterialTimepickerModule,
    MatSelectModule,
    MatTableModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAGZ2zL733xnEyQJe-fRqjsuAfdEpAD1_s',
        libraries: ['places']
    })
  ],
  providers: [
    TitleService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
