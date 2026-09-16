import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ReverseMode =
  | 'characters'
  | 'words'
  | 'lines';

@Component({
  selector: 'app-text-reverser',
  imports: [FormsModule],
  templateUrl: './text-reverser.html',
  styleUrl: './text-reverser.css'
})
export class TextReverser {
  inputText = '';

  reverseMode: ReverseMode = 'characters';

  readonly reverseOptions: {
    value: ReverseMode;
    label: string;
  }[] = [
    {
      value: 'characters',
      label: 'Reverse Characters'
    },
    {
      value: 'words',
      label: 'Reverse Words'
    },
    {
      value: 'lines',
      label: 'Reverse Lines'
    }
  ];

  get outputText(): string {
    switch (this.reverseMode) {
      case 'characters':
        return this.reverseCharacters(this.inputText);

      case 'words':
        return this.reverseWords(this.inputText);

      case 'lines':
        return this.reverseLines(this.inputText);

      default:
        return this.inputText;
    }
  }

  get characterCount(): number {
    return this.inputText.length;
  }

  get wordCount(): number {
    const text = this.inputText.trim();

    if (!text) {
      return 0;
    }

    return text.split(/\s+/).length;
  }

  get lineCount(): number {
    if (!this.inputText) {
      return 0;
    }

    return this.inputText.split(/\r?\n/).length;
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

  private reverseCharacters(value: string): string {
    return Array.from(value)
      .reverse()
      .join('');
  }

  private reverseWords(value: string): string {
    const words = value.trim();

    if (!words) {
      return '';
    }

    return words
      .split(/\s+/)
      .reverse()
      .join(' ');
  }

  private reverseLines(value: string): string {
    if (!value) {
      return '';
    }

    return value
      .split(/\r?\n/)
      .reverse()
      .join('\n');
  }
}