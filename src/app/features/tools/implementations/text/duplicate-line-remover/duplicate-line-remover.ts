import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-duplicate-line-remover',
  imports: [FormsModule],
  templateUrl: './duplicate-line-remover.html',
  styleUrl: './duplicate-line-remover.css'
})
export class DuplicateLineRemover {
  inputText = '';

  caseSensitive = true;
  trimWhitespace = true;
  removeEmptyLines = false;

  get lines(): string[] {
    if (!this.inputText) {
      return [];
    }

    return this.inputText.split(/\r?\n/);
  }

  get originalLineCount(): number {
    return this.lines.length;
  }

  get outputLines(): string[] {
    const seen = new Set<string>();
    const result: string[] = [];

    for (const originalLine of this.lines) {
      const line = this.trimWhitespace
        ? originalLine.trim()
        : originalLine;

      if (this.removeEmptyLines && !line) {
        continue;
      }

      const comparisonKey = this.caseSensitive
        ? line
        : line.toLowerCase();

      if (seen.has(comparisonKey)) {
        continue;
      }

      seen.add(comparisonKey);
      result.push(line);
    }

    return result;
  }

  get outputText(): string {
    return this.outputLines.join('\n');
  }

  get uniqueLineCount(): number {
    return this.outputLines.length;
  }

  get duplicateCount(): number {
    return Math.max(
      0,
      this.originalLineCount - this.uniqueLineCount
    );
  }

  clear(): void {
    this.inputText = '';
  }

  async copyOutput(): Promise<void> {
    if (!this.outputText) {
      return;
    }

    await navigator.clipboard.writeText(this.outputText);
  }
}