import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type UrlMode = 'encode' | 'decode';

@Component({
  selector: 'app-url-encoder',
  imports: [FormsModule],
  templateUrl: './url-encoder.html',
  styleUrl: '../security-tool-shared.css'
})
export class UrlEncoder {
  inputText = '';
  mode: UrlMode = 'encode';
  errorMessage = '';

  get outputText(): string {
    if (!this.inputText) {
      return '';
    }

    try {
      this.errorMessage = '';

      return this.mode === 'encode'
        ? encodeURIComponent(this.inputText)
        : decodeURIComponent(this.inputText);
    } catch {
      this.errorMessage =
        'Unable to decode the supplied URL-encoded value.';

      return '';
    }
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
}