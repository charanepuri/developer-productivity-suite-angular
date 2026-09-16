import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  hexToRgb,
  rgbToHex
} from '../color-utils';

@Component({
  selector: 'app-color-palette-generator',
  imports: [FormsModule],
  templateUrl: './color-palette-generator.html',
  styleUrl: './color-palette-generator.css'
})
export class ColorPaletteGenerator {
  baseColor = '#2563EB';

  get palette(): string[] {
    const rgb = hexToRgb(this.baseColor);

    if (!rgb) {
      return [];
    }

    const factors = [0.2, 0.4, 0.6, 0.8];

    const lighter = factors.map(factor =>
      rgbToHex({
        r: rgb.r + (255 - rgb.r) * factor,
        g: rgb.g + (255 - rgb.g) * factor,
        b: rgb.b + (255 - rgb.b) * factor
      })
    );

    return [
      ...lighter.reverse(),
      rgbToHex(rgb)
    ];
  }

  async copyColor(color: string): Promise<void> {
    await navigator.clipboard.writeText(color);
  }

  async copyPalette(): Promise<void> {
    await navigator.clipboard.writeText(this.palette.join('\n'));
  }

  reset(): void {
    this.baseColor = '#2563EB';
  }
}