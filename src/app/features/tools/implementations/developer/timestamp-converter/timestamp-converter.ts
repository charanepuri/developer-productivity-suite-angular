import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timestamp-converter',
  imports: [FormsModule],
  templateUrl: './timestamp-converter.html',
  styleUrl: './timestamp-converter.css'
})
export class TimestampConverter {
  timestamp = Math.floor(Date.now() / 1000);

  get date(): Date {
    return new Date(Number(this.timestamp) * 1000);
  }

  get isoString(): string {
    return this.date.toISOString();
  }

  get localString(): string {
    return this.date.toLocaleString();
  }

  get milliseconds(): number {
    return Number(this.timestamp) * 1000;
  }

  setCurrentTimestamp(): void {
    this.timestamp = Math.floor(Date.now() / 1000);
  }

  fromIso(): void {
    const value = prompt(
      'Enter an ISO date, for example 2026-09-16T10:30:00Z'
    );

    if (!value) {
      return;
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return;
    }

    this.timestamp = Math.floor(date.getTime() / 1000);
  }

  fromMilliseconds(): void {
    const value = prompt('Enter Unix timestamp in milliseconds');

    if (!value) {
      return;
    }

    const milliseconds = Number(value);

    if (!Number.isFinite(milliseconds)) {
      return;
    }

    this.timestamp = Math.floor(milliseconds / 1000);
  }

  async copy(value: string): Promise<void> {
    await navigator.clipboard.writeText(value);
  }
}