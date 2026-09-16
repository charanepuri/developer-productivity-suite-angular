import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  parseJson,
  jsonToCsv
} from '../json-utils';

@Component({
  selector: 'app-json-to-csv',
  imports: [FormsModule],
  templateUrl: './json-to-csv.html',
  styleUrl: '../json-tool-shared.css'
})
export class JsonToCsv {
  inputText = '';

  get outputText(): string {
    if (!this.inputText.trim()) {
      return '';
    }

    const result = parseJson(
      this.inputText
    );

    if (!result.valid) {
      return '';
    }

    return jsonToCsv(result.data);
  }

  get errorMessage(): string {
    if (!this.inputText.trim()) {
      return '';
    }

    return parseJson(
      this.inputText
    ).error ?? '';
  }

  get rowCount(): number {
    if (!this.inputText.trim()) {
      return 0;
    }

    const result = parseJson(
      this.inputText
    );

    if (!result.valid) {
      return 0;
    }

    if (Array.isArray(result.data)) {
      return result.data.length;
    }

    return 1;
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

  downloadCsv(): void {
    if (!this.outputText) {
      return;
    }

    const blob = new Blob(
      [this.outputText],
      { type: 'text/csv;charset=utf-8;' }
    );

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');

    anchor.href = url;
    anchor.download = 'converted-data.csv';
    anchor.click();

    URL.revokeObjectURL(url);
  }
}