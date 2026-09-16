import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  contrastRatio,
  hexToRgb
} from '../color-utils';

@Component({
  selector: 'app-contrast-checker',
  imports: [FormsModule],
  templateUrl: './contrast-checker.html',
  styleUrl: './contrast-checker.css'
})
export class ContrastChecker {
  foreground = '#FFFFFF';
  background = '#2563EB';

  get ratio(): number {
    const foreground = hexToRgb(this.foreground);
    const background = hexToRgb(this.background);

    if (!foreground || !background) {
      return 0;
    }

    return contrastRatio(foreground, background);
  }

  get ratioText(): string {
    return this.ratio.toFixed(2);
  }

  get normalAa(): boolean {
    return this.ratio >= 4.5;
  }

  get largeAa(): boolean {
    return this.ratio >= 3;
  }

  get normalAaa(): boolean {
    return this.ratio >= 7;
  }

  get largeAaa(): boolean {
    return this.ratio >= 4.5;
  }

  reset(): void {
    this.foreground = '#FFFFFF';
    this.background = '#2563EB';
  }
}