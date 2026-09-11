import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly storage = globalThis.localStorage;

  get<T>(key: string): T | null {
    const value = this.storage.getItem(key);

    if (value === null) {
      return null;
    }

    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  }

  set<T>(key: string, value: T): void {
    this.storage.setItem(
      key,
      JSON.stringify(value)
    );
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }

  has(key: string): boolean {
    return this.storage.getItem(key) !== null;
  }
}