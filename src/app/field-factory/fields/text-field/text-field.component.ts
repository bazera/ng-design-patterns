import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Field } from '../field.model';

@Component({
  selector: 'app-text-field',
  imports: [],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent implements Field {
  get value() {
    return 'hey from text field';
  }

  validate() {
    return true;
  }
}
