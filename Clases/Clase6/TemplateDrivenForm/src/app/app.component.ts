import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SharkDirective } from './directive/shark.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'reactiveForms';
  /*extraCreature!: string;

  @ViewChild (SharkDirective)
  set appShark(directive: SharkDirective) {
    this.extraCreature = directive.creature;
  }
  ngAfterViewInit() {
    console.log(this.extraCreature);
    
  }*/

  @ViewChild('someInput') someInput!: ElementRef;
  
  ngAfterViewInit() {
    this.someInput.nativeElement.value = 'mono';
  }

}
