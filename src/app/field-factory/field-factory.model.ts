import { Type } from '@angular/core';
import {
  EmailFieldComponent,
  NumberFieldComponent,
  TextFieldComponent,
} from './fields';

export enum FieldType {
  Text = 'Text',
  Number = 'Number',
  Email = 'Email',
}

export type FieldComponents =
  | TextFieldComponent
  | NumberFieldComponent
  | EmailFieldComponent;

export const fieldByType: Record<FieldType, Type<FieldComponents>> = {
  [FieldType.Text]: TextFieldComponent,
  [FieldType.Number]: NumberFieldComponent,
  [FieldType.Email]: EmailFieldComponent,
};
