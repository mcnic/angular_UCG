import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { pipe } from 'rxjs';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(false);
  }

  private highlight(set: boolean) {
    // if (set) {
    //   this.el.nativeElement.classList.set('selected');
    // } else {
    //   this.el.nativeElement.classList.remove('selected');
    // }
    if (set) {
      this.renderer.addClass(this.el.nativeElement, 'selected');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'selected');
    }
  }
}
