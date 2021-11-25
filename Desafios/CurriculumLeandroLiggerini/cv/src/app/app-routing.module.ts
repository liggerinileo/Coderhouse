import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInicioComponent } from "./home-inicio/home-inicio.component";
import { HomeEstudiosComponent } from "./home-estudios/home-estudios.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homeInicioComponent',
    pathMatch: 'full'
  },
  {
    path: 'homeInicioComponent',
    component: HomeInicioComponent
  },
  {
    path: 'homeEstudiosComponent',
    component: HomeEstudiosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
