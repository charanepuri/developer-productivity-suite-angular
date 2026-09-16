import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  minifyJson
} from '../json-utils';

@Component({
  selector: 'app-json-minifier',
  imports: [FormsModule],
  templateUrl: './json-minifier.html',
  styleUrl: '../json-tool-shared.css'
})
export class JsonMinifier {
  inputText = '';

  get outputText(): string {
    if (!this.inputText.trim()) {
      return '';
    }

    const result = minifyJson(
      this.inputText
    );

    return result.valid
      ? String(result.data)
      : '';
  }

  get isValid(): boolean | null {
    if (!this.inputText.trim()) {
      return null;
    }

    return minifyJson(
      this.inputText
    ).valid;
  }

  get originalSize(): number {
    return new TextEncoder().encode(
      this.inputText
    ).length;
  }

  get minifiedSize(): number {
    return new TextEncoder().encode(
      this.outputText
    ).length;
  }

  get savedBytes(): number {
    return Math.max(
      0,
      this.originalSize - this.minifiedSize
    );
  }

  clear(): void {
    this.inputText = '';
  }

  async copyOutput(): Promise<void> {
    if (!this.outputText) {
      return;
    }

    await navigator.clipboard.writeText(
      this.outputText
    );
  }
}