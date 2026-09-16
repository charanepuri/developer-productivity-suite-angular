import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  rgbToCss
} from '../color-utils';

@Component({
  selector: 'app-color-converter',
  imports: [FormsModule],
  templateUrl: './color-converter.html',
  styleUrl: './color-converter.css'
})
export class ColorConverter {
  hex = '#2563EB';

  get rgb() {
    return hexToRgb(this.hex);
  }

  get hsl() {
    const rgb = this.rgb;

    return rgb ? rgbToHsl(rgb) : null;
  }

  get rgbText(): string {
    const rgb = this.rgb;

    return rgb ? rgbToCss(rgb) : 'Invalid HEX';
  }

  get hslText(): string {
    const hsl = this.hsl;

    return hsl
      ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
      : 'Invalid HEX';
  }

  get hexText(): string {
    const rgb = this.rgb;

    return rgb ? rgbToHex(rgb) : 'Invalid HEX';
  }

  reset(): void {
    this.hex = '#2563EB';
  }

  async copy(value: string): Promise<void> {
    await navigator.clipboard.writeText(value);
  }
}