import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentService } from './content.service';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule
  ],
  providers: [ContentService]
})
export class ContentModule { }
