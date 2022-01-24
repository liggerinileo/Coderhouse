import { Component, Input } from '@angular/core';
import { CartService } from "../../service/cart/cart.service";
import { Movie } from "../../models/Movie";
import { MoviesService } from 'src/app/service/movies/movies.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/service/users/users.service';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-card-movie-big',
  templateUrl: './card-movie-big.component.html',
  styleUrls: ['./card-movie-big.component.scss']
})
export class CardMovieBigComponent {
  @Input() _id: any;
  @Input() id: any;
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() duration: string = '';
  @Input() year: number = 0;
  @Input() price: number = 0;
  @Input() genre: string[] = [];
  @Input() filmZoneCategory: string[] = [];
  @Input() addedToCart: boolean = false;
  movieToDelete: any;
  admin: boolean = false;
  addedToC: boolean = false;
  user: any;

  constructor(private cartService: CartService, private moviesService: MoviesService,
    private router: Router, private modal: NgbModal, private userService: UsersService) {
      this.user = this.userService.getUser();
      if (this.user.isAdmin) {
        this.admin = true;
      }
    }


  addToCart(): void {
    this.moviesService.getAll().subscribe(res => {
      res?.forEach((r:any) => {
        if (r?.name == this.name) {
          this.addedToC = true;
          
          let movieCart: Cart = {
            id: this.id,
            image: this.image,
            name: this.name,
            description: this.description,
            duration: this.duration,
            year: this.year,
            price: this.price,
            genre: this.genre,
            filmZoneCategory: this.filmZoneCategory,
            addedToCart: this.addedToC,
            returnDate: " ",
            rented: false,
            client: this.user.userName
          }

          this.cartService.addMovie(movieCart).subscribe(res => {
            this._id = r?._id;

            let movie: Movie = {
              id: this.id,
              image: this.image,
              name: this.name,
              description: this.description,
              duration: this.duration,
              year: this.year,
              price: this.price,
              genre: this.genre,
              filmZoneCategory: this.filmZoneCategory,
              addedToCart: this.addedToC
            }

            this.moviesService.editMovie(movie, this._id).subscribe(res => {
              console.log(res);
        
            }, error => {
              console.log(error);
        
            });
      
          }, error => {
            console.log(error);
      
          });
        }
      });

    }, error => {
      console.log(error);
      alert(error?.error?.message);

    });
  }

  openModal(content: any) {
    let movie = {
      image: this.image,
      name: this.name,
      description: this.description,
      duration: this.duration,
      year: this.year,
      price: this.price,
      genre: this.genre,
      filmZoneCategory: this.filmZoneCategory
    }

    this.moviesService.setMovie(movie);

    let options: NgbModalOptions = {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    };
    this.modal.open(content, options);
  }

  dismiss() {
    this.modal.dismissAll();
  }

  edit() {
    let movie = {
      image: this.image,
      name: this.name,
      description: this.description,
      duration: this.duration,
      year: this.year,
      price: this.price,
      genre: this.genre,
      filmZoneCategory: this.filmZoneCategory
    }

    this.moviesService.setMovie(movie);
    this.router.navigate(['/create']);
  }

  delete() {
    let movie = this.moviesService.getMovie();
    this.moviesService.getAll().subscribe(res => {
      res?.forEach((r:any) => {
        if (r?.name == movie.name) {
          this.movieToDelete = r;
          if (this.movieToDelete != undefined) {
            this.moviesService.delete(this.movieToDelete?._id).subscribe(res => {
              this.modal.dismissAll();
              this.router.navigate(['/home']);
              
            }, error => {
              this.modal.dismissAll();
              alert(error?.error?.message);
      
            });
          }
        }
      });
    }, error => {
      console.log(error);
      alert(error?.error?.message);

    });
  }
}
