import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  imports: [FormsModule],
  templateUrl: './password-generator.html',
  styleUrl: '../security-tool-shared.css'
})
export class PasswordGenerator {
  length = 16;

  includeUppercase = true;
  includeLowercase = true;
  includeNumbers = true;
  includeSymbols = true;

  password = '';

  get characterPool(): string {
    let pool = '';

    if (this.includeUppercase) {
      pool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (this.includeLowercase) {
      pool += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (this.includeNumbers) {
      pool += '0123456789';
    }

    if (this.includeSymbols) {
      pool += '!@#$%^&*()-_=+[]{};:,.?';
    }

    return pool;
  }

  get passwordStrength(): string {
    if (this.length >= 20) {
      return 'Strong';
    }

    if (this.length >= 12) {
      return 'Good';
    }

    if (this.length >= 8) {
      return 'Moderate';
    }

    return 'Weak';
  }

  generate(): void {
    const pool = this.characterPool;

    if (!pool) {
      this.password = '';
      return;
    }

    const values = new Uint32Array(
      this.length
    );

    crypto.getRandomValues(values);

    this.password = Array.from(values)
      .map(value =>
        pool[value % pool.length]
      )
      .join('');
  }

  clear(): void {
    this.password = '';
  }

  async copyPassword(): Promise<void> {
    if (!this.password) {
      return;
    }

    await navigator.clipboard.writeText(
      this.password
    );
  }
}