import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  @HostListener('click') toggleOpen() {
    console.log('click');
    // if (this.el.nativeElement.classList.contains('show')) {
    //   this.renderer.removeClass(this.el.nativeElement, 'show');
    // } else {
    //   this.renderer.addClass(this.el.nativeElement, 'show');
    // }
    this.isOpen = !this.isOpen;
  }
}
