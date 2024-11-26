import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { fieldByType, FieldComponents, FieldType } from './field-factory.model';

@Component({
  selector: 'app-field-factory',
  imports: [],
  templateUrl: './field-factory.component.html',
  styleUrl: './field-factory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldFactoryComponent {
  @ViewChild('fieldContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  private componentRef: ComponentRef<FieldComponents> | undefined;

  fieldType = FieldType;

  createField(type: FieldType) {
    const component = fieldByType[type];

    if (!component) {
      throw new Error(`field type ${type} is not supported`);
    }

    this.container.clear();
    this.componentRef =
      this.container.createComponent<FieldComponents>(component);
  }

  validateField() {
    if (!this.componentRef) {
      throw new Error(`field isn't rendered`);
    }

    const valid = this.componentRef.instance.validate();
    console.log(valid);
  }

  renderFieldValue() {
    if (!this.componentRef) {
      throw new Error(`field isn't rendered`);
    }

    const value = this.componentRef.instance.value;
    console.log(value);
  }
}
