import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShark]'
})
export class SharkDirective {
  creature = 'Delfin';

  constructor(elem: ElementRef, renderer: Renderer2) { 
    let shark = renderer.createText('Tiburon');
    renderer.appendChild(elem.nativeElement, shark);
  }

}
