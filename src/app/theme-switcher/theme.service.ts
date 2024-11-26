import { Injectable, signal } from '@angular/core';
import { ThemeStrategy } from './theme-strategies';

@Injectable()
export class ThemeService {
  private themeStrategy = signal<ThemeStrategy | undefined>(undefined);

  setStrategy(strategy: ThemeStrategy) {
    this.themeStrategy.set(strategy);
  }

  applyTheme() {
    const themeStrategy = this.themeStrategy();

    if (!themeStrategy) {
      throw new Error('No theme strategy set');
    }

    themeStrategy.applyTheme();
  }
}
