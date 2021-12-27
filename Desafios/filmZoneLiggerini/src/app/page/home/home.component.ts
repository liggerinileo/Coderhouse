import { Component } from "@angular/core";
import { Card } from "src/app/component/card-movie/card";
import { MoviesService } from "src/app/service/movies/movies.service";
import { UsersService } from "src/app/service/users/users.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {

  continuarViendo: Card[] = [];
  tendencias: Card[] = [];
  recomendaciones: Card[] = [];
  estrenos: Card[] = [];
  admin: boolean = false;
  
  constructor(private moviesService: MoviesService, private userService: UsersService) { 
    this.load();
  }

  load() {
    const user = this.userService.getUser();
    if (user[0].admin) {
      this.admin = true;
    }
    
    this.moviesService.getAll().subscribe(movies => {
      this.continuarViendo = movies.filter((movie: any) => movie.filmZoneCategory.includes("continuar-viendo"));
      this.tendencias = movies.filter((movie: any) => movie.filmZoneCategory.includes("tendencias"));
      this.recomendaciones = movies.filter((movie: any) => movie.filmZoneCategory.includes("recomendaciones"));
      this.estrenos = movies.filter((movie: any) => movie.filmZoneCategory.includes("estrenos"));
      
    }, error => {
      console.log(error);

    });
  } 

}