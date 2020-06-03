import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  value: string;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.value = this.contentService.getValue();
  }

}
