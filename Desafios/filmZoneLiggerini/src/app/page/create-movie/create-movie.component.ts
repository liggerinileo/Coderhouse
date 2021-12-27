import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/service/movies/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent {
  hide = true;
  hide2 = true;

  constructor(private fb: FormBuilder, private router: Router, private moviesService: MoviesService) { }

  uploadMovieForm = this.fb.group({
    name: [
      '', 
      [Validators.required]
    ],
    year: [
      '', 
      [Validators.required]
    ],
    duration: [
      '', 
      [Validators.required]
    ],
    description: [
      '', 
      [Validators.required]
    ],
    image: [
      '', 
      [Validators.required]
    ],
    price: [
      '', 
      [Validators.required]
    ],
    genre: [
      '', 
      [Validators.required]
    ],
    continuar: [
      ''
    ],
    tendencias: [
      ''
    ],
    recomendaciones: [
      ''
    ],
    estrenos: [
      ''
    ]
    
  }
  );

  save() {
    let categorias: string[] = [];
    let peliculaRepetida = false;
    let generos: string[] = [];
    let generosCopia: string[] = [];
    let genre = this.uploadMovieForm?.value?.genre;

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
    
    let movie = {
      name: this.uploadMovieForm?.value?.name,
      year: this.uploadMovieForm?.value?.year,
      image: this.uploadMovieForm?.value?.image,
      duration: this.uploadMovieForm?.value?.duration,
      description: this.uploadMovieForm?.value?.description,
      price: this.uploadMovieForm?.value?.price,
      genre: generos,
      filmZoneCategory: categorias,
      addedToCart: false
    }
    
    this.moviesService.getAll().subscribe(movies => {
      movies.forEach((e: any) => {
        if (e.name == movie.name) {
          peliculaRepetida = true;

        }
      });
      if (!peliculaRepetida) {
        this.moviesService.createMovie(movie).subscribe(res => {
          console.log(res);
          this.volver();

        }, error => {
          console.log(error);

        });
      } else {
        alert('La pelicula ' + movie.name + ' ya existe.');

      }
    }, error => {
      console.log(error);

    });
  }

  volver() {
    this.router.navigate(['/home']);
  }

}
