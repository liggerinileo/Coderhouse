import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Telaraña', 'Trepar',
            'Fuerza', 'Agilidad'];

  model = new Hero(21, 'Spiderman', this.powers[0], 'Peter Parker');

  submitted = false;

  onSubmit() { this.submitted = true; }


  newHero() {
    this.model = new Hero(42, '', '');
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; 
  }



}