import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CitaFechaComponent } from './pages/cita-fecha/cita-fecha.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { CotizarComponent } from './pages/cotizar/cotizar.component';
import { MedicoComponent } from './pages/medico/medico.component';



const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'citaFecha', component: CitaFechaComponent},
    { path: 'consultas', component: ConsultasComponent},
    { path: 'cotizar', component: CotizarComponent},
    { path: 'medico', component: MedicoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
