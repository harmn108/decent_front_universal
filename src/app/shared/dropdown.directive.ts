import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @Input() listLength: number;

    constructor(private elementRef: ElementRef, public renderer: Renderer2,) {
    }

    @HostListener('document:click', ['$event.target']) slideDown(el) {
        if (el != this.elementRef.nativeElement || el.querySelector("ul").classList.contains('slideDown')) {
            this.elementRef.nativeElement.querySelector("ul").classList.remove('slideDown');
            this.renderer.setStyle(this.elementRef.nativeElement.querySelector("ul"), "max-height", 0);
            this.elementRef.nativeElement.querySelector("ul").classList.add('slideUp')
        } else {
            el.querySelector("ul").classList.remove('slideUp');
            this.renderer.setStyle(el.querySelector("ul"), "max-height", this.listLength * 50 + "px");
            el.querySelector("ul").classList.add('slideDown')
        }
    }

}
