import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverZoom]',
  standalone: true
})
export class HoverZoom {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Aplica a transição para o zoom ser suave
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease-in-out');
  }

  // Aumenta o card quando o mouse entra
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer'); // Muda a setinha do mouse para a "mãozinha"
  }

  // Volta ao tamanho normal quando o mouse sai
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}