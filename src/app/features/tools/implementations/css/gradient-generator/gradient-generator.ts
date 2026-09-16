import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type GradientType = 'linear' | 'radial';

@Component({
  selector: 'app-gradient-generator',
  imports: [FormsModule],
  templateUrl: './gradient-generator.html',
  styleUrl: './gradient-generator.css'
})
export class GradientGenerator {
  type: GradientType = 'linear';

  angle = 135;
  colorOne = '#2563eb';
  colorTwo = '#9333ea';

  get gradient(): string {
    if (this.type === 'radial') {
      return `radial-gradient(circle, ${this.colorOne}, ${this.colorTwo})`;
    }

    return `linear-gradient(${this.angle}deg, ${this.colorOne}, ${this.colorTwo})`;
  }

  get cssCode(): string {
    return `.element {
  background: ${this.gradient};
}`;
  }

  async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.cssCode);
  }

  reset(): void {
    this.type = 'linear';
    this.angle = 135;
    this.colorOne = '#2563eb';
    this.colorTwo = '#9333ea';
  }
}