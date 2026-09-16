import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  nextBirthdayDays: number;
}

@Component({
  selector: 'app-age-calculator',
  imports: [FormsModule],
  templateUrl: './age-calculator.html',
  styleUrl: './age-calculator.css'
})
export class AgeCalculator {
  birthDate = '2000-01-01';

  calculationDate = this.formatDate(new Date());

  get result(): AgeResult | null {
    const birth = this.parseDate(this.birthDate);
    const current = this.parseDate(this.calculationDate);

    if (!birth || !current || current < birth) {
      return null;
    }

    let years = current.getFullYear() - birth.getFullYear();
    let months = current.getMonth() - birth.getMonth();
    let days = current.getDate() - birth.getDate();

    if (days < 0) {
      months--;

      const previousMonth = new Date(
        current.getFullYear(),
        current.getMonth(),
        0
      );

      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor(
      (current.getTime() - birth.getTime()) /
      (1000 * 60 * 60 * 24)
    );

    const nextBirthday = new Date(
      current.getFullYear(),
      birth.getMonth(),
      birth.getDate()
    );

    if (nextBirthday <= current) {
      nextBirthday.setFullYear(
        current.getFullYear() + 1
      );
    }

    const nextBirthdayDays = Math.ceil(
      (nextBirthday.getTime() - current.getTime()) /
      (1000 * 60 * 60 * 24)
    );

    return {
      years,
      months,
      days,
      totalDays,
      nextBirthdayDays
    };
  }

  get error(): string {
    const birth = this.parseDate(this.birthDate);
    const current = this.parseDate(this.calculationDate);

    if (!birth || !current) {
      return 'Please enter valid dates.';
    }

    if (current < birth) {
      return 'Calculation date must be on or after the birth date.';
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

  setToday(): void {
    this.calculationDate = this.formatDate(new Date());
  }

  reset(): void {
    this.birthDate = '2000-01-01';
    this.calculationDate = this.formatDate(new Date());
  }
}