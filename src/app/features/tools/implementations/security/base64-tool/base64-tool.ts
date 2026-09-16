import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Base64Mode = 'encode' | 'decode';

@Component({
  selector: 'app-base64-tool',
  imports: [FormsModule],
  templateUrl: './base64-tool.html',
  styleUrl: '../security-tool-shared.css'
})
export class Base64Tool {
  inputText = '';
  mode: Base64Mode = 'encode';
  errorMessage = '';

  get outputText(): string {
    if (!this.inputText) {
      return '';
    }

    try {
      this.errorMessage = '';

      return this.mode === 'encode'
        ? this.encode(this.inputText)
        : this.decode(this.inputText);
    } catch {
      this.errorMessage =
        'Unable to process the supplied Base64 value.';

      return '';
    }
  }

  get inputLength(): number {
    return this.inputText.length;
  }

  get outputLength(): number {
    return this.outputText.length;
  }

  clear(): void {
    this.inputText = '';
    this.errorMessage = '';
  }

  swap(): void {
    if (!this.outputText) {
      return;
    }

    this.inputText = this.outputText;
    this.mode =
      this.mode === 'encode'
        ? 'decode'
        : 'encode';
  }

  async copyOutput(): Promise<void> {
    if (!this.outputText) {
      return;
    }

    await navigator.clipboard.writeText(
      this.outputText
    );
  }

  private encode(value: string): string {
    const bytes = new TextEncoder().encode(value);

    let binary = '';

    bytes.forEach(byte => {
      binary += String.fromCharCode(byte);
    });

    return btoa(binary);
  }

  private decode(value: string): string {
    const binary = atob(value.trim());

    const bytes = Uint8Array.from(
      binary,
      character => character.charCodeAt(0)
    );

    return new TextDecoder().decode(bytes);
  }
}