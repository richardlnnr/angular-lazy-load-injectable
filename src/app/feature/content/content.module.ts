import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentService } from './content.service';
import { ContentRoutingModule } from './content-routing.module';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  providers: [ContentService]
})
export class ContentModule { }
