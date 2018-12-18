import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadModule } from './upload/upload.module';
import { UploadComponent } from './final/upload/upload.component';
import { DndDirective } from './final/dnd.directive';
import { UploadProgressComponent } from './final/upload-progress/upload-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DndDirective,
    UploadProgressComponent
  ],
  imports: [
    BrowserModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
