import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  signal,
  viewChild,
  ViewContainerRef,
  WritableSignal,
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
  container = viewChild('fieldContainer', { read: ViewContainerRef });

  private componentRef: WritableSignal<
    ComponentRef<FieldComponents> | undefined
  > = signal(undefined);

  fieldType = FieldType;

  createField(type: FieldType) {
    const component = fieldByType[type];

    if (!component) {
      throw new Error(`field type ${type} is not supported`);
    }

    const container = this.container();

    if (container) {
      container.clear();
      this.componentRef.set(
        container.createComponent<FieldComponents>(component)
      );
    }
  }

  validateField() {
    if (!this.componentRef) {
      throw new Error(`field isn't rendered`);
    }

    const componentRef = this.componentRef();

    if (componentRef) {
      const valid = componentRef.instance.validate();
      console.log(valid);
    }
  }

  renderFieldValue() {
    if (!this.componentRef) {
      throw new Error(`field isn't rendered`);
    }

    const componentRef = this.componentRef();

    if (componentRef) {
      const value = componentRef.instance.value;
      console.log(value);
    }
  }
}
