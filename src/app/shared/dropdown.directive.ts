//Directive to be used for opening and closing menus by clicking on a menu, and afterwards anywhere else or the button again

import {Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') isOpen = false;

@HostListener('document:click', ['$event']) toggleOpen(event: Event) {
this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
}

constructor(private elRef:ElementRef){}


}
