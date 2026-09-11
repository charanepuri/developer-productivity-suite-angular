import {
  DOCUMENT
} from '@angular/common';

import {
  Injectable,
  inject
} from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly document =
    inject(DOCUMENT);

  private readonly storageService =
    inject(StorageService);

  private readonly storageKey =
    'dps-theme';

  private readonly darkModeSubject =
    new BehaviorSubject<boolean>(
      this.loadTheme()
    );

  readonly darkMode$ =
    this.darkModeSubject.asObservable();

  constructor() {
    this.applyTheme(
      this.darkModeSubject.value
    );
  }

  toggle(): void {
    this.setDarkMode(
      !this.darkModeSubject.value
    );
  }

  setDarkMode(enabled: boolean): void {

    this.darkModeSubject.next(enabled);

    this.applyTheme(enabled);

    this.storageService.set(
      this.storageKey,
      enabled
    );
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }

  private applyTheme(enabled: boolean): void {

    this.document.documentElement
      .classList.toggle(
        'dark',
        enabled
      );

    this.document.documentElement
      .classList.toggle(
        'light',
        !enabled
      );
  }

  private loadTheme(): boolean {

    const stored =
      this.storageService.get<boolean>(
        this.storageKey
      );

    return stored ?? true;
  }
}