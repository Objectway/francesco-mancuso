import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private el:ElementRef) {
      el.nativeElement.style.background="yellow"
   }

}
