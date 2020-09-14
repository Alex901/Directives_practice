import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') default : string = 'purple';
  @Input() highlight : string = 'blue';
  @Input() random : string = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private el : ElementRef, private renderer : Renderer2) { }


  ngOnInit(){
   this.backgroundColor = this.default;
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter') mouseover(eventData : Event){
   // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlight;
  }

  @HostListener('mouseleave') mouseleave(eventData : Event){
   // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.random;
  }
}
