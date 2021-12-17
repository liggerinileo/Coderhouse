import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInicioComponent } from "./page/home-inicio/home-inicio.component";
import { PostsComponent } from "./page/posts/posts.component";
import { PostComponent } from "./page/post/post.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeInicioComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
