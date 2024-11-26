import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { DarkThemeStrategy, LightThemeStrategy } from './theme-strategies/';

@Component({
  selector: 'app-theme-switcher',
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DarkThemeStrategy, LightThemeStrategy, ThemeService],
})
export class ThemeSwitcherComponent {
  constructor(
    private themeService: ThemeService,
    private darkThemeStrategy: DarkThemeStrategy,
    private lightThemeStrategy: LightThemeStrategy
  ) {}

  applyDarkTheme() {
    this.themeService.setStrategy(this.darkThemeStrategy);
    this.themeService.applyTheme();
  }

  applyLightTheme() {
    this.themeService.setStrategy(this.lightThemeStrategy);
    this.themeService.applyTheme();
  }
}
