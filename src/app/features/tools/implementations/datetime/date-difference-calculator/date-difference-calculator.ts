import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface DateDifference {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
}

@Component({
  selector: 'app-date-difference-calculator',
  imports: [FormsModule],
  templateUrl: './date-difference-calculator.html',
  styleUrl: './date-difference-calculator.css'
})
export class DateDifferenceCalculator {
  startDate = this.formatDate(new Date());

  endDate = this.formatDate(
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  );

  get difference(): DateDifference | null {
    const start = this.parseDate(this.startDate);
    const end = this.parseDate(this.endDate);

    if (!start || !end || end < start) {
      return null;
    }

    const milliseconds = end.getTime() - start.getTime();

    const totalSeconds = Math.floor(milliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = totalDays / 7;

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;

      const previousMonth = new Date(
        end.getFullYear(),
        end.getMonth(),
        0
      );

      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return {
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalHours,
      totalMinutes,
      totalSeconds
    };
  }

  get error(): string {
    const start = this.parseDate(this.startDate);
    const end = this.parseDate(this.endDate);

    if (!start || !end) {
      return 'Please enter valid dates.';
    }

    if (end < start) {
      return 'End date must be on or after the start date.';
    }

    return '';
  }

  private parseDate(value: string): Date | null {
    if (!value) {
      return null;
    }

    const date = new Date(`${value}T00:00:00`);

    return Number.isNaN(date.getTime())
      ? null
      : date;
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  setTodayAsStart(): void {
    this.startDate = this.formatDate(new Date());
  }

  reset(): void {
    this.startDate = this.formatDate(new Date());

    this.endDate = this.formatDate(
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    );
  }
}