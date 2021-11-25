import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { HomeEstudiosComponent } from './home-estudios/home-estudios.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeInicioComponent
  },
  {
    path: 'estudios',
    component: HomeEstudiosComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeInicioComponent,
    HomeEstudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
