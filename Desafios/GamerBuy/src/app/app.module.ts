import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeInicioComponent } from './page/home-inicio/home-inicio.component';
import { PostsComponent } from './page/posts/posts.component';
import { PostComponent } from './page/post/post.component';
import { PcListComponent } from './component/pc-list/pc-list.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './component/cart/cart.component';
import { InputIntegerComponent } from './component/input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeInicioComponent,
    PostsComponent,
    PostComponent,
    PcListComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
