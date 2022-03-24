import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  constructor(private element: ElementRef) {}
}
