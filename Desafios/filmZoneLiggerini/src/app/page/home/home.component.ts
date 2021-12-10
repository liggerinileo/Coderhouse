import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movie = { url: '', title: ''};
  movie2 = { url: '', title: ''};
  movie3 = { url: '', title: ''};
  movie4 = { url: '', title: ''};
  movie5 = { url: '', title: ''};


  constructor() { 
    this.load();
  }

  ngOnInit(): void { }

  load() {
    this.movie = {
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poster-joker-2-1567010576.jpg?crop=1.00xw:0.349xh;0,0.137xh&resize=480:*',
      title: 'Joker',
    };
    this.movie2 = {
      url: 'https://movieposterhd.com/wp-content/uploads/2019/03/Game-of-Thrones-Wallpaper-HD.jpg',
      title: 'Game of thrones',
    };
    this.movie3 = {
      url: 'https://images6.alphacoders.com/750/thumb-350-750311.jpg',
      title: 'Mr robot',
    };
    this.movie4 = {
      url: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg',
      title: 'Avengers: endgame',
    };
    this.movie5 = {
      url: 'https://images.squarespace-cdn.com/content/v1/587d33a54402432706c7e9e7/1560275527196-J4CIN6V5Z9VWUZ76FGQO/Once-Upon-A-Time-In-Hollywood-Poster-New-Header_1050_591_81_s_c1.jpg?format=2500w',
      title: 'Once upon a time in hollywood',
    };
  }

}
