import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/service/cart/cart.service';
import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;
  moviesList: any;

  constructor(private router: Router, private userService: UsersService, private cartService: CartService) {
    this.user = userService.getUser();
    this.moviesList = [];
  }

  ngOnInit(): void {
    this.cartService.getAll().subscribe(movies => {
      console.log(movies);
      movies.forEach((movie: any) => {
        if (movie?.client == this.user.userName) {
          console.log(movie);
          this.moviesList.push(movie);
        }
      });
      console.log(this.moviesList);
    }, error => {
      console.log(error);
      alert(error?.error?.message);

    });
  }

}
