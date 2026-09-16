import {
  DOCUMENT
} from '@angular/common';

import {
  inject,
  Injectable
} from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs';

import {
  StorageService
} from './storage.service';

import {
  ThemeMode
} from '../models/theme-mode.type';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageService =
    inject(StorageService);

  private readonly document =
    inject(DOCUMENT);

  private readonly themeStorageKey =
    'dps-theme';

  private readonly themeSubject =
    new BehaviorSubject<ThemeMode>(
      this.loadTheme()
    );

  readonly theme$ =
    this.themeSubject.asObservable();

  constructor() {
    this.applyTheme(this.themeSubject.value);
  }

  getTheme(): ThemeMode {
    return this.themeSubject.value;
  }

  setTheme(theme: ThemeMode): void {
    this.themeSubject.next(theme);

    this.storageService.set(
      this.themeStorageKey,
      theme
    );

    this.applyTheme(theme);
  }

  toggleDarkMode(): void {
    const currentTheme =
      this.themeSubject.value;

    this.setTheme(
      currentTheme === 'dark'
        ? 'light'
        : 'dark'
    );
  }

  resetTheme(): void {
    this.setTheme('system');
  }

  private loadTheme(): ThemeMode {
    const savedTheme =
      this.storageService.get<string>(
        this.themeStorageKey
      );

    if (
      savedTheme === 'dark' ||
      savedTheme === 'light' ||
      savedTheme === 'system'
    ) {
      return savedTheme;
    }

    return 'system';
  }

  private applyTheme(theme: ThemeMode): void {
    const root =
      this.document.documentElement;

    root.classList.remove(
      'dark',
      'light'
    );

    if (theme === 'dark') {
      root.classList.add('dark');
      return;
    }

    if (theme === 'light') {
      root.classList.add('light');
      return;
    }

    const prefersDark =
      globalThis.matchMedia?.(
        '(prefers-color-scheme: dark)'
      ).matches ?? false;

    root.classList.add(
      prefersDark ? 'dark' : 'light'
    );
  }
}