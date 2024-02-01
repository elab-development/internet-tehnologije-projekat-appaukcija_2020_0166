import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appAtributskaDirektiva]'
})
export class AtributskaDirektivaDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle('color', 'red');
    this.setStyle('background-color', 'yellow');
   
  }

  private setStyle(style: string, value: string): void {
    this.renderer.setStyle(this.el.nativeElement, style, value);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyle('background-color', 'orange'); 
    this.setStyle('color', 'white'); 
   
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle('background-color', 'yellow'); 
    this.setStyle('color', 'red'); 
    
  }
}
