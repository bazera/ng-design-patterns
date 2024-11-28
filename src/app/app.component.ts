import {
  Component,
  inject,
  Injectable,
  InjectionToken,
  Type,
} from '@angular/core';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { FieldFactoryComponent } from './field-factory/field-factory.component';
import { environment } from '../environments/environment';
import { ApiStrategy } from '../environments/environment.model';
import { Observable, of } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ApiFactoryComponent } from './api-factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ThemeSwitcherComponent, FieldFactoryComponent, ApiFactoryComponent],
})
export class AppComponent {
  title = 'ng-design-patterns';
}
