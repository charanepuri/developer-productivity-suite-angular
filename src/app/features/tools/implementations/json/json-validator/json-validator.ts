import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  parseJson,
  getJsonType
} from '../json-utils';

@Component({
  selector: 'app-json-validator',
  imports: [FormsModule],
  templateUrl: './json-validator.html',
  styleUrl: '../json-tool-shared.css'
})
export class JsonValidator {
  inputText = '';

  get validationResult(): {
    valid: boolean;
    error: string | null;
  } | null {
    if (!this.inputText.trim()) {
      return null;
    }

    const result = parseJson(
      this.inputText
    );

    return {
      valid: result.valid,
      error: result.error
    };
  }

  get rootType(): string {
    if (!this.inputText.trim()) {
      return '';
    }

    const result = parseJson(
      this.inputText
    );

    return result.valid
      ? getJsonType(result.data)
      : '';
  }

  clear(): void {
    this.inputText = '';
  }
}