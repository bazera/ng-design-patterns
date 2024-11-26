import { inject, Injectable, Renderer2 } from '@angular/core';
import { ThemeStrategy } from './theme-strategy.base';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class LightThemeStrategy implements ThemeStrategy {
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);

  applyTheme() {
    this.renderer.addClass(this.document.body, 'theme-light');
    this.renderer.removeClass(this.document.body, 'theme-dark');
  }
}
