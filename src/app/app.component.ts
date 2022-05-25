import { Component } from '@angular/core';
import { SEOService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private SEOService: SEOService) {
    this.SEOService.updateTitle();
  }
}
