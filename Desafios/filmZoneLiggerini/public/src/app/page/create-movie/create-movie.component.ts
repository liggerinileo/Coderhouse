import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/service/movies/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit{
  hide = true;
  hide2 = true;
  movie: any;
  uploadMovieForm: any;
  title: string = "Crear";
  editar = false;

  constructor(private fb: FormBuilder, private router: Router, private moviesService: MoviesService) {
    this.movie = moviesService.getMovie();
  }

  ngOnInit(): void {
    if (this.movie != undefined) {
      this.title = "Editar";
      this.editar = true;
      this.moviesService.getAll().subscribe(res => {
        let categorias: any;
        res?.forEach((r: any) => {
          if (r?.name == this.movie?.name) {
            this.movie = r;
            let cont = this.movie.filmZoneCategory.includes("continuar-viendo") ? true : '';
            let tend = this.movie.filmZoneCategory.includes("tendencias") ? true : '';
            let recomend = this.movie.filmZoneCategory.includes("recomendaciones") ? true : '';
            let estre = this.movie.filmZoneCategory.includes("estrenos") ? true : ''; 
            categorias = {
              continuar: cont,
              tendencias: tend,
              recomendaciones: recomend,
              estrenos: estre
            }
          }
        });
        this.setForm(this.movie, categorias);
      }, error => {
        console.log(error);
  
      });
    } else {
      this.title = "Crear";
      let mov = {
        name: '',
        year: '',
        duration: '',
        description: '',
        image: '',
        price: '',
        genre: '',
      };
      let categorias = {
        continuar: '',
        tendencias: '',
        recomendaciones: '',
        estrenos: ''
      }
      this.setForm(mov, categorias);
    }
  }

  setForm(movie: any, categorias: any){
    this.uploadMovieForm = this.fb.group({
      name: [
        movie.name, 
        [Validators.required]
      ],
      year: [
        movie.year, 
        [Validators.required]
      ],
      duration: [
        movie.duration, 
        [Validators.required]
      ],
      description: [
        movie.description, 
        [Validators.required]
      ],
      image: [
        movie.image, 
        [Validators.required]
      ],
      price: [
        movie.price, 
        [Validators.required]
      ],
      genre: [
        movie.genre, 
        [Validators.required]
      ],
      continuar: [
        categorias.continuar
      ],
      tendencias: [
        categorias.tendencias
      ],
      recomendaciones: [
        categorias.recomendaciones
      ],
      estrenos: [
        categorias.estrenos
      ]
      
    });
  }

  save() {
    let categorias: string[] = [];
    let generos: string[] = [];
    let generosCopia: string[] = [];
    let genre = this.uploadMovieForm?.value?.genre;
    let movie: Movie;

    if (genre.includes(',')) {
      generosCopia = genre.split(',');
      generosCopia.forEach(genero => {
        let gen = genero.trim();
        generos.push(gen);
      });
    } else {
      generos.push(genre);
    }
    
    if (this.uploadMovieForm?.value?.continuar) {
      categorias.push("continuar-viendo");
    }
    if (this.uploadMovieForm?.value?.tendencias) {
      categorias.push("tendencias");
    }
    if (this.uploadMovieForm?.value?.recomendaciones) {
      categorias.push("recomendaciones");
    }
    if (this.uploadMovieForm?.value?.estrenos) {
      categorias.push("estrenos");
    }
    
    if (!this.editar) {
      this.moviesService.getAll().subscribe(movies => {
        movie = {
          id: movies?.length + 1,
          name: this.uploadMovieForm?.value?.name,
          year: this.uploadMovieForm?.value?.year,
          image: this.uploadMovieForm?.value?.image,
          duration: this.uploadMovieForm?.value?.duration,
          description: this.uploadMovieForm?.value?.description,
          price: this.uploadMovieForm?.value?.price,
          genre: generos,
          filmZoneCategory: categorias,
          addedToCart: false,
        }
        this.moviesService.createMovie(movie).subscribe(res => {
          console.log(res);
          this.volver();
  
        }, error => {
          if(error == "Token invalido" || error == "No hay token") {
            alert("Ha expirado el tiempo de sesión");
  
          } else {
            alert(error?.error?.message);
  
          }
        });
      }, error => {
        console.log(error);
        alert(error?.error?.message)
      });
    } else {
      movie = {
        id: this.movie?.id,
        name: this.uploadMovieForm?.value?.name,
        year: this.uploadMovieForm?.value?.year,
        image: this.uploadMovieForm?.value?.image,
        duration: this.uploadMovieForm?.value?.duration,
        description: this.uploadMovieForm?.value?.description,
        price: this.uploadMovieForm?.value?.price,
        genre: generos,
        filmZoneCategory: categorias,
        addedToCart: this.movie?.addedToCart,
      }
      this.moviesService.editMovie(movie, this.movie?._id).subscribe(res => {
        console.log(res);
        this.volver();

      }, error => {
        console.log(error);
        if(error == "Token invalido" || error == "No hay token") {
          alert("Ha expirado el tiempo de sesión");

        } else {
          alert(error?.error?.message);

        }
      });
    }
  }

  volver() {
    this.router.navigate(['/home']);
  }

}
