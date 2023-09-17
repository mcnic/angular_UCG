import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('numberInput') numberInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientRemove = new EventEmitter<number>();
  @Output() ingredientsCleared = new EventEmitter<null>();

  constructor() {}

  ngOnInit() {}

  onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.numberInputRef.nativeElement.value;
    const newIng = new Ingredient(name, amount);
    this.ingredientAdded.emit(newIng);
  }

  onRemoveItem() {
    this.ingredientRemove.emit();
  }

  onClearItems() {
    this.ingredientsCleared.emit();
  }
}
