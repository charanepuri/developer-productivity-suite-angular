import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TimezoneOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-timezone-converter',
  imports: [FormsModule],
  templateUrl: './timezone-converter.html',
  styleUrl: './timezone-converter.css'
})
export class TimezoneConverter {
  dateTime = this.formatDateTime(new Date());

  sourceTimezone = 'Asia/Kolkata';

  targetTimezone = 'America/New_York';

  readonly timezones: readonly TimezoneOption[] = [
    {
      label: 'India — Kolkata',
      value: 'Asia/Kolkata'
    },
    {
      label: 'United Kingdom — London',
      value: 'Europe/London'
    },
    {
      label: 'United States — New York',
      value: 'America/New_York'
    },
    {
      label: 'United States — Los Angeles',
      value: 'America/Los_Angeles'
    },
    {
      label: 'United States — Chicago',
      value: 'America/Chicago'
    },
    {
      label: 'Japan — Tokyo',
      value: 'Asia/Tokyo'
    },
    {
      label: 'Singapore',
      value: 'Asia/Singapore'
    },
    {
      label: 'Australia — Sydney',
      value: 'Australia/Sydney'
    },
    {
      label: 'United Arab Emirates — Dubai',
      value: 'Asia/Dubai'
    },
    {
      label: 'Germany — Berlin',
      value: 'Europe/Berlin'
    },
    {
      label: 'Canada — Toronto',
      value: 'America/Toronto'
    },
    {
      label: 'UTC',
      value: 'UTC'
    }
  ];

  get sourceDate(): Date | null {
    if (!this.dateTime) {
      return null;
    }

    const match =
      /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/
        .exec(this.dateTime);

    if (!match) {
      return null;
    }

    const [, year, month, day, hour, minute] = match;

    return this.zonedTimeToUtc(
      Number(year),
      Number(month),
      Number(day),
      Number(hour),
      Number(minute),
      this.sourceTimezone
    );
  }

  get convertedTime(): string {
    const date = this.sourceDate;

    if (!date) {
      return 'Invalid date';
    }

    return new Intl.DateTimeFormat('en-US', {
      timeZone: this.targetTimezone,
      dateStyle: 'full',
      timeStyle: 'long'
    }).format(date);
  }

  get sourceTime(): string {
    const date = this.sourceDate;

    if (!date) {
      return 'Invalid date';
    }

    return new Intl.DateTimeFormat('en-US', {
      timeZone: this.sourceTimezone,
      dateStyle: 'full',
      timeStyle: 'long'
    }).format(date);
  }

  private zonedTimeToUtc(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    timezone: string
  ): Date {
    const desired = new Date(
      Date.UTC(year, month - 1, day, hour, minute)
    );

    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    });

    const parts = formatter.formatToParts(desired);

    const values: Record<string, number> = {};

    for (const part of parts) {
      if (
        part.type === 'year' ||
        part.type === 'month' ||
        part.type === 'day' ||
        part.type === 'hour' ||
        part.type === 'minute'
      ) {
        values[part.type] = Number(part.value);
      }
    }

    const asUtc = Date.UTC(
      values['year'],
      values['month'] - 1,
      values['day'],
      values['hour'],
      values['minute']
    );

    const offset = asUtc - desired.getTime();

    return new Date(desired.getTime() - offset);
  }

  private formatDateTime(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  setNow(): void {
    this.dateTime = this.formatDateTime(new Date());
  }

  swap(): void {
    const timezone = this.sourceTimezone;

    this.sourceTimezone = this.targetTimezone;
    this.targetTimezone = timezone;
  }
}