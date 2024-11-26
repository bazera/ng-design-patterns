import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ThemeSwitcherComponent],
})
export class AppComponent {
  title = 'ng-design-patterns';
}
