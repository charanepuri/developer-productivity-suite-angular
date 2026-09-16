import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  flattenJsonKeys,
  JsonKeyInfo,
  parseJson
} from '../json-utils';

@Component({
  selector: 'app-json-key-extractor',
  imports: [FormsModule],
  templateUrl: './json-key-extractor.html',
  styleUrl: '../json-tool-shared.css'
})
export class JsonKeyExtractor {
  inputText = '';

  get keys(): JsonKeyInfo[] {
    if (!this.inputText.trim()) {
      return [];
    }

    const result = parseJson(
      this.inputText
    );

    if (!result.valid) {
      return [];
    }

    return flattenJsonKeys(
      result.data
    );
  }

  get uniqueKeys(): string[] {
    return Array.from(
      new Set(
        this.keys.map(item => item.key)
      )
    );
  }

  get errorMessage(): string {
    if (!this.inputText.trim()) {
      return '';
    }

    return parseJson(
      this.inputText
    ).error ?? '';
  }

  get keyList(): string {
    return this.uniqueKeys.join('\n');
  }

  clear(): void {
    this.inputText = '';
  }

  async copyKeys(): Promise<void> {
    if (!this.keyList) {
      return;
    }

    await navigator.clipboard.writeText(
      this.keyList
    );
  }
}