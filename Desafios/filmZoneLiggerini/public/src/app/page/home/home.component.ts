import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Movie } from "src/app/models/Movie";
import { MoviesService } from "src/app/service/movies/movies.service";
import { UsersService } from "src/app/service/users/users.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent{

  continuarViendo: Movie[] = [];
  tendencias: Movie[] = [];
  recomendaciones: Movie[] = [];
  estrenos: Movie[] = [];
  admin: boolean = false;
  
  constructor(private moviesService: MoviesService, private router: Router, private userService: UsersService) { 
    const user = this.userService.getUser();
    if (user?.isAdmin) {
      this.admin = true;
    }
  }

  ngAfterContentInit(){
    this.load();
  }

  load() {
    this.moviesService.getAll().subscribe(movies => {
      
      this.continuarViendo = movies.filter((movie: any) => movie.filmZoneCategory.includes("continuar-viendo"));
      this.tendencias = movies.filter((movie: any) => movie.filmZoneCategory.includes("tendencias"));
      this.recomendaciones = movies.filter((movie: any) => movie.filmZoneCategory.includes("recomendaciones"));
      this.estrenos = movies.filter((movie: any) => movie.filmZoneCategory.includes("estrenos"));
      
    }, error => {
      console.log(error);

    });
  } 

  reloadMovies(event: boolean){
    if(event) this.load();    
  }

  toCreate() {
    this.moviesService.setMovie(undefined);
    this.router.navigate(["/create"]);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

}