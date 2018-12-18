import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @HostBinding('style.background') private background = '#fff';

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    console.log('Enter Box', evt);
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  @HostListener ('dragleave', ['$event']) ondragleave(evt) {
    console.log('Leaving Box');
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#fff';
  }

  @HostListener ('drop', ['$event']) ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      
      console.log('files: ', files);
      // this.filesUploadedEmitter.emit(files);
    }
  }


  constructor() { }

}
