import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Field } from '../field.model';

@Component({
  selector: 'app-number-field',
  imports: [],
  templateUrl: './number-field.component.html',
  styleUrl: './number-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberFieldComponent implements Field {
  get value() {
    return 'hey from number field';
  }

  validate() {
    return false;
  }
}
