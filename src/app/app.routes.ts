import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EquiposComponent } from './equipos/equipos.component'; 

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'equipos', component: EquiposComponent } 
];