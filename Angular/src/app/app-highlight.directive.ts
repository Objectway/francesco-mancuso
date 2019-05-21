import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective {

  constructor(private el:ElementRef) {
      el.nativeElement.style.background= "red"
   }

}
