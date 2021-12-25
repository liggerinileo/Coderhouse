import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movie = { url: '', title: '', description: '', duration: ''};
  movie2 = { url: '', title: '', description: '', duration: ''};
  movie3 = { url: '', title: '', description: '', duration: ''};
  movie4 = { url: '', title: '', description: '', duration: ''};
  movie5 = { url: '', title: '', description: '', duration: ''};
  bigMovie1 = { url: '', title: '', description: '', duration: ''};
  bigMovie2 = { url: '', title: '', description: '', duration: ''};

  listaCarrito: {}[] = [];
  mostrarListaCarrito: boolean = false;
  
  constructor() { 
    this.load();
  }

  ngOnInit(): void { }

  load() {
    this.movie = {
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poster-joker-2-1567010576.jpg?crop=1.00xw:0.349xh;0,0.137xh&resize=480:*',
      title: 'Joker',
      description: 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      duration: '159m'
    };
    this.movie2 = {
      url: './../../../assets/got.jpg',
      title: 'Game of thrones',
      description: 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      duration: '50m'
    };
    this.movie3 = {
      url: 'https://images6.alphacoders.com/750/thumb-350-750311.jpg',
      title: 'Mr robot',
      description: 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      duration: '41m'
    };
    this.movie4 = {
      url: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg',
      title: 'Avengers: endgame',
      description: 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      duration: '172m'
    };
    this.movie5 = {
      url: 'https://images.squarespace-cdn.com/content/v1/587d33a54402432706c7e9e7/1560275527196-J4CIN6V5Z9VWUZ76FGQO/Once-Upon-A-Time-In-Hollywood-Poster-New-Header_1050_591_81_s_c1.jpg?format=2500w',
      title: 'Once upon a time in hollywood',
      description: 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      duration: '120m'
    };
    this.bigMovie1 = {
      url: 'https://www.mundiario.com/media/mundiario/images/2021/10/22/2021102216200260524.png',
      title: 'Red notice',
      description: 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      duration: '120m'
    };
    this.bigMovie2 = {
      url: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/the-wheel-of-time-new-poster-social-featured.jpg',
      title: 'The wheel of time',
      description: 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      duration: '120m'
    };
  }

  /*load2() {
    {
      "name": 'Joker',
      "image": 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poster-joker-2-1567010576.jpg?crop=1.00xw:0.349xh;0,0.137xh&resize=480:*',
      "description": 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      year: 2019,
      price: 150.99,
      genre: ['Drama', 'Suspense'],
      filmZoneCategory: ['continuar-viendo', 'recomendaciones'],
      duration: '159m'
    },
    {
      "name": 'Game of thrones',
      "image": './../../../assets/got.jpg',
      "description": 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      year: 2011,
      price: 599.99,
      genre: ['Drama', 'Suspense', 'Sci-Fi'],
      filmZoneCategory: ['recomendaciones'],
      duration: '50m'
    },
    {
      "name": 'Mr robot',
      "image": 'https://images6.alphacoders.com/750/thumb-350-750311.jpg',
      "description": 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      year: 2015,
      price: 599.99,
      genre: ['Drama', 'Suspense'],
      filmZoneCategory: ['recomendaciones'],
      duration: '41m'
    },
    {
      "name": 'Avengers: endgame',
      "image": 'https://ichef.bbci.co.uk/news/640/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg',
      "description": 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      year: 2011,
      price: 599.99,
      genre: ['Action', 'Sci-Fi'],
      filmZoneCategory: ['continuar-viendo', 'recomendaciones'],
      duration: '172m'
    },
    {
      "name": 'Once upon a time in hollywood',
      "image": 'https://images.squarespace-cdn.com/content/v1/587d33a54402432706c7e9e7/1560275527196-J4CIN6V5Z9VWUZ76FGQO/Once-Upon-A-Time-In-Hollywood-Poster-New-Header_1050_591_81_s_c1.jpg?format=2500w',
      "description": 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      year: 2011,
      price: 599.99,
      genre: ['Drama', 'Comedy'],
      filmZoneCategory: ['continuar-viendo', 'recomendaciones'],
      duration: '120m'
    },
    {
      "name": 'Red notice',
      "image": 'https://www.mundiario.com/media/mundiario/images/2021/10/22/2021102216200260524.png',
      "description": 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      year: 2015,
      price: 599.99,
      genre: ['Action', 'Adventure'],
      filmZoneCategory: ['tendencias'],
      duration: '120m'
    },
    {
      "name": 'The wheel of time',
      "image": 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/the-wheel-of-time-new-poster-social-featured.jpg',
      "description": 'LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus ex, et congue enim. Phasellus dictum imperdiet lobortis. Donec imperdiet euismod ante, eu dignissim metus rutrum ut. In commodo aliquam hendrerit. Vivamus vitae lobortis tortor. Praesent rutrum leo non tellus interdum condimentum. Proin eget imperdiet massa, at rutrum tortor. Nam imperdiet pretium nisl eleifend vehicula. Quisque sed commodo libero. Praesent vel orci imperdiet, viverra ante facilisis, sagittis magna.em',
      year: 2015,
      price: 599.99,
      genre: ['Action', 'Sci-Fi'],
      filmZoneCategory: ['tendencias'],
      duration: '120m'
    }
  }
  
  
  {
  "fullname": "Leandro Liggerini",
  "userName": "ligge10",
  "email": "ligge@gmail.com",
  "password": "Leandro123",
  "admin": false,
  "id": "1"
 }

  
  
  */

}
