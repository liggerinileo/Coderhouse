import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Movie } from "src/app/models/Movie";
import { CartService } from "src/app/service/cart/cart.service";
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
  user: any;
  
  constructor(private moviesService: MoviesService, private router: Router, private userService: UsersService,
    private cartService: CartService) { 
    this.user = this.userService.getUser();
    if (this.user?.isAdmin) {
      this.admin = true;
    }
  }

  ngAfterContentInit(){
    this.load();
  }

  load() {
    this.moviesService.getAll().subscribe(movies => {
      this.cartService.getAll().subscribe(m => {
        if (m.length > 0) {
          let cartUser = m.filter((movie: any) => movie.client == this.user.userName);
          console.log(cartUser);
          cartUser.forEach((movie: any) => {
            movies.forEach((e: any) => {
              let movieUser = cartUser.filter((mo: any) => mo.name == e.name);
              console.log(movieUser);
              if (movieUser.length == 0) {
                e.addedToCart = false;
                console.log(e);
    
              }
            });
          });
        } else {
          let moviesAdded = movies.filter((m: any) => m.addedToCart);
          if (moviesAdded.length > 0) {
            moviesAdded.forEach((e: any) => {
              e.addedToCart = false;
              this.moviesService.editMovie(e, e._id).subscribe(res => {
                console.log(res);
        
              }, error => {
                console.log(error);
                if(error == "Token invalido" || error == "No hay token") {
                  alert("Ha expirado el tiempo de sesión");
        
                } else {
                  alert(error?.error?.message);
        
                }
              });
            });
          }
        }
        this.continuarViendo = movies.filter((movie: Movie) => movie.filmZoneCategory.includes("continuar-viendo"));
        this.tendencias = movies.filter((movie: Movie) => movie.filmZoneCategory.includes("tendencias"));
        this.recomendaciones = movies.filter((movie: Movie) => movie.filmZoneCategory.includes("recomendaciones"));
        this.estrenos = movies.filter((movie: Movie) => movie.filmZoneCategory.includes("estrenos"));

      }, error => {
        console.log(error);
  
      });
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