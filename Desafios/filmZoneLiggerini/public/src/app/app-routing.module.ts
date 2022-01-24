import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./page/home/home.component";
import { LoginComponent } from "./page/login/login.component";
import { RegisterComponent } from "./page/register/register.component";
import { CartPageComponent } from "./page/cart-page/cart-page.component";
import { CreateMovieComponent } from "./page/create-movie/create-movie.component";

const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'create',
    component: CreateMovieComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
