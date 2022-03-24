import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective implements AfterViewInit {
  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) document: Document
  ) {}

  ngAfterViewInit() {}
}
