import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    OnInit
} from "@angular/core";

@Directive({
    selector: '[HighlightDirective]'
})
export class HighLightDirective implements OnInit {

    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elementRef: ElementRef) {

    }
    ngOnInit(): void {

    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
        this.backgroundColor = 'red';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.elementRef.nativeElement.style.backgroundColor = 'blue';
        this.backgroundColor = 'orange';
    }
}