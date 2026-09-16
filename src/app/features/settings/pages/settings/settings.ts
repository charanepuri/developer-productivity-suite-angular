import {
  AsyncPipe
} from '@angular/common';

import {
  Component,
  inject
} from '@angular/core';

import {
  ThemeMode
} from '../../../../core/models/theme-mode.type';

import {
  ThemeService
} from '../../../../core/services/theme.service';

@Component({
  selector: 'app-settings',
  imports: [AsyncPipe],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  private readonly themeService =
    inject(ThemeService);

  readonly theme$ =
    this.themeService.theme$;

  setTheme(theme: ThemeMode): void {
    this.themeService.setTheme(theme);
  }

  resetSettings(): void {
    this.themeService.resetTheme();
  }
}