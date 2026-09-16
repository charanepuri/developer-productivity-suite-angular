import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  flattenJsonKeys,
  JsonKeyInfo,
  parseJson
} from '../json-utils';

@Component({
  selector: 'app-json-tree-viewer',
  imports: [FormsModule],
  templateUrl: './json-tree-viewer.html',
  styleUrl: '../json-tool-shared.css'
})
export class JsonTreeViewer {
  inputText = '';

  get treeNodes(): JsonKeyInfo[] {
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

  get errorMessage(): string {
    if (!this.inputText.trim()) {
      return '';
    }

    return parseJson(
      this.inputText
    ).error ?? '';
  }

  clear(): void {
    this.inputText = '';
  }
}