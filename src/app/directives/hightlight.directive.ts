import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
  standalone: true
})
export class HightlightDirective {

  constructor(public e1:ElementRef) { }

  @HostBinding('style.backgroundColor')
  bgColor = 'yellow';

  @HostListener('mouseenter') //event trigger
  changeFontSize(){
    this.e1.nativeElement.style.fontSize = "50px";
    // console.log('mouse enter');
  }

  @HostListener('mouseleave')
  resetFontSize(){
    this.e1.nativeElement.style.fontSize = "30px";
    // console.log('mouse leave');
  }

}
