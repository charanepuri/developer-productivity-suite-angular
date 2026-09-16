import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type SortMode =
  | 'az'
  | 'za'
  | 'numeric-asc'
  | 'numeric-desc';

@Component({
  selector: 'app-line-sorter',
  imports: [FormsModule],
  templateUrl: './line-sorter.html',
  styleUrl: './line-sorter.css'
})
export class LineSorter {
  inputText = '';

  sortMode: SortMode = 'az';
  caseSensitive = false;
  trimWhitespace = true;
  removeEmptyLines = false;

  readonly sortOptions: {
    value: SortMode;
    label: string;
  }[] = [
    {
      value: 'az',
      label: 'A → Z'
    },
    {
      value: 'za',
      label: 'Z → A'
    },
    {
      value: 'numeric-asc',
      label: 'Numeric: Low → High'
    },
    {
      value: 'numeric-desc',
      label: 'Numeric: High → Low'
    }
  ];

  get originalLines(): string[] {
    if (!this.inputText) {
      return [];
    }

    return this.inputText.split(/\r?\n/);
  }

  get preparedLines(): string[] {
    return this.originalLines
      .map(line =>
        this.trimWhitespace
          ? line.trim()
          : line
      )
      .filter(line =>
        this.removeEmptyLines
          ? line.length > 0
          : true
      );
  }

  get sortedLines(): string[] {
    const lines = [...this.preparedLines];

    if (
      this.sortMode === 'numeric-asc' ||
      this.sortMode === 'numeric-desc'
    ) {
      return lines.sort((a, b) => {
        const numberA = Number(a);
        const numberB = Number(b);

        if (
          Number.isNaN(numberA) ||
          Number.isNaN(numberB)
        ) {
          return this.compareText(a, b);
        }

        return this.sortMode === 'numeric-asc'
          ? numberA - numberB
          : numberB - numberA;
      });
    }

    return lines.sort((a, b) => {
      const comparison = this.compareText(a, b);

      return this.sortMode === 'az'
        ? comparison
        : -comparison;
    });
  }

  get outputText(): string {
    return this.sortedLines.join('\n');
  }

  get originalLineCount(): number {
    return this.originalLines.length;
  }

  get preparedLineCount(): number {
    return this.preparedLines.length;
  }

  get sortedLineCount(): number {
    return this.sortedLines.length;
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

  private compareText(
    first: string,
    second: string
  ): number {
    const left = this.caseSensitive
      ? first
      : first.toLowerCase();

    const right = this.caseSensitive
      ? second
      : second.toLowerCase();

    return left.localeCompare(right, undefined, {
      numeric: true,
      sensitivity: this.caseSensitive
        ? 'case'
        : 'base'
    });
  }
}