import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  hexToRgb,
  rgbToHex
} from '../color-utils';

@Component({
  selector: 'app-shade-tint-generator',
  imports: [FormsModule],
  templateUrl: './shade-tint-generator.html',
  styleUrl: './shade-tint-generator.css'
})
export class ShadeTintGenerator {
  baseColor = '#2563EB';

  get shades(): string[] {
    const rgb = hexToRgb(this.baseColor);

    if (!rgb) {
      return [];
    }

    return [0.2, 0.4, 0.6, 0.8].map(factor =>
      rgbToHex({
        r: rgb.r * (1 - factor),
        g: rgb.g * (1 - factor),
        b: rgb.b * (1 - factor)
      })
    );
  }

  get tints(): string[] {
    const rgb = hexToRgb(this.baseColor);

    if (!rgb) {
      return [];
    }

    return [0.2, 0.4, 0.6, 0.8].map(factor =>
      rgbToHex({
        r: rgb.r + (255 - rgb.r) * factor,
        g: rgb.g + (255 - rgb.g) * factor,
        b: rgb.b + (255 - rgb.b) * factor
      })
    );
  }

  async copy(color: string): Promise<void> {
    await navigator.clipboard.writeText(color);
  }

  reset(): void {
    this.baseColor = '#2563EB';
  }
}