import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  hexToRgb,
  rgbToHsl,
  rgbToCss
} from '../color-utils';

@Component({
  selector: 'app-color-picker',
  imports: [FormsModule],
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.css'
})
export class ColorPicker {
  color = '#2563EB';

  get rgb() {
    return hexToRgb(this.color);
  }

  get hsl() {
    const rgb = this.rgb;

    return rgb ? rgbToHsl(rgb) : null;
  }

  get rgbText(): string {
    const rgb = this.rgb;

    return rgb ? rgbToCss(rgb) : 'Invalid color';
  }

  get hslText(): string {
    const hsl = this.hsl;

    return hsl
      ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
      : 'Invalid color';
  }

  async copyHex(): Promise<void> {
    await navigator.clipboard.writeText(this.color.toUpperCase());
  }

  reset(): void {
    this.color = '#2563EB';
  }
}