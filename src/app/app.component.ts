import { Component } from '@angular/core';
import { TMenus } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadedFeature: TMenus = 'recipe';

  onNavigate(feature: TMenus) {
    this.loadedFeature = feature;
  }
}
