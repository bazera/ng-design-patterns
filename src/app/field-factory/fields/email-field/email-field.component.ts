import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Field } from '../field.model';

@Component({
  selector: 'app-email-field',
  imports: [],
  templateUrl: './email-field.component.html',
  styleUrl: './email-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailFieldComponent implements Field {
  get value() {
    return 'hey from email field';
  }

  validate() {
    return false;
  }
}
