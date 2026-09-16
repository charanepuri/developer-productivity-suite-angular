import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CronPreset {
  label: string;
  expression: string;
  description: string;
}

@Component({
  selector: 'app-cron-expression-helper',
  imports: [FormsModule],
  templateUrl: './cron-expression-helper.html',
  styleUrl: './cron-expression-helper.css'
})
export class CronExpressionHelper {
  expression = '0 0 * * *';

  readonly presets: readonly CronPreset[] = [
    {
      label: 'Every Minute',
      expression: '* * * * *',
      description: 'Runs every minute.'
    },
    {
      label: 'Every Hour',
      expression: '0 * * * *',
      description: 'Runs at the start of every hour.'
    },
    {
      label: 'Every Day at Midnight',
      expression: '0 0 * * *',
      description: 'Runs every day at 00:00.'
    },
    {
      label: 'Every Day at 9 AM',
      expression: '0 9 * * *',
      description: 'Runs every day at 09:00.'
    },
    {
      label: 'Every Monday',
      expression: '0 9 * * 1',
      description: 'Runs every Monday at 09:00.'
    },
    {
      label: 'First Day of Month',
      expression: '0 0 1 * *',
      description: 'Runs at midnight on the first day of every month.'
    }
  ];

  readonly fields = [
    {
      field: 'Minute',
      allowed: '0-59',
      description: 'Minute of the hour'
    },
    {
      field: 'Hour',
      allowed: '0-23',
      description: 'Hour of the day'
    },
    {
      field: 'Day',
      allowed: '1-31',
      description: 'Day of the month'
    },
    {
      field: 'Month',
      allowed: '1-12',
      description: 'Month of the year'
    },
    {
      field: 'Weekday',
      allowed: '0-7',
      description: 'Day of the week'
    }
  ];

  selectPreset(expression: string): void {
    this.expression = expression;
  }

  get description(): string {
    const preset = this.presets.find(
      item => item.expression === this.expression.trim()
    );

    return preset?.description ?? this.describeExpression();
  }

  private describeExpression(): string {
    const parts = this.expression.trim().split(/\s+/);

    if (parts.length !== 5) {
      return 'A standard cron expression contains five fields.';
    }

    const labels = [
      'minute',
      'hour',
      'day of month',
      'month',
      'weekday'
    ];

    const active = parts
      .map((value, index) =>
        value !== '*'
          ? `${labels[index]} = ${value}`
          : null
      )
      .filter(Boolean);

    return active.length
      ? `Schedule defined by ${active.join(', ')}.`
      : 'Runs every minute.';
  }

  reset(): void {
    this.expression = '0 0 * * *';
  }
}