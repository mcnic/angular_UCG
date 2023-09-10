import { Component, EventEmitter, Output } from '@angular/core';

export type TMenus = 'recipe' | 'shopping-list';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<TMenus>();
  onSelect(feature: TMenus) {
    this.featureSelected.emit(feature);
  }
}
