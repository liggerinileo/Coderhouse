import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeInicioComponent } from './page/home-inicio/home-inicio.component';
import { PostsComponent } from './page/posts/posts.component';
import { PostComponent } from './page/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeInicioComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
