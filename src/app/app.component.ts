import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { FieldFactoryComponent } from './field-factory/field-factory.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ThemeSwitcherComponent, FieldFactoryComponent],
})
export class AppComponent {
  title = 'ng-design-patterns';
}
