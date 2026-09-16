import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  formatJson
} from '../json-utils';

@Component({
  selector: 'app-json-formatter',
  imports: [FormsModule],
  templateUrl: './json-formatter.html',
  styleUrl: '../json-tool-shared.css'
})
export class JsonFormatter {
  inputText = '';
  indentation = 2;

  readonly indentationOptions = [
    { value: 2, label: '2 Spaces' },
    { value: 4, label: '4 Spaces' },
    { value: 8, label: '8 Spaces' }
  ];

  get outputText(): string {
    if (!this.inputText.trim()) {
      return '';
    }

    const result = formatJson(
      this.inputText,
      this.indentation
    );

    return result.valid
      ? String(result.data)
      : '';
  }

  get isValid(): boolean | null {
    if (!this.inputText.trim()) {
      return null;
    }

    return formatJson(
      this.inputText,
      this.indentation
    ).valid;
  }

  get errorMessage(): string {
    if (!this.inputText.trim()) {
      return '';
    }

    const result = formatJson(
      this.inputText,
      this.indentation
    );

    return result.error ?? '';
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