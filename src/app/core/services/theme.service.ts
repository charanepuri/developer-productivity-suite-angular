import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageService = inject(StorageService);

  private readonly darkModeSubject =
    new BehaviorSubject<boolean>(
      this.loadTheme()
    );

  readonly darkMode$ =
    this.darkModeSubject.asObservable();

  constructor() {
    this.applyTheme(this.darkModeSubject.value);
  }

  toggle(): void {
    const nextMode = !this.darkModeSubject.value;

    this.darkModeSubject.next(nextMode);

    this.storageService.set(
      'dps-theme',
      nextMode
    );

    this.applyTheme(nextMode);
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }

  private applyTheme(isDark: boolean): void {
    const root = document.documentElement;

    root.classList.toggle('dark', isDark);
    root.classList.toggle('light', !isDark);
  }

  private loadTheme(): boolean {
    return (
      this.storageService.get<boolean>(
        'dps-theme'
      ) ?? true
    );
  }
}