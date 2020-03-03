import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {
  @Input() appSubrayar:string;

  constructor(public el:ElementRef) {}
   
  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = this.appSubrayar || 'yellow';
  }
}
