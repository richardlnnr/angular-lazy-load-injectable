import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-lazy-load-injectable';

  constructor(private router: Router) {}

  ngOnInit() {
    // Manually triggering initial navigation
    this.router.initialNavigation();
  }
}
