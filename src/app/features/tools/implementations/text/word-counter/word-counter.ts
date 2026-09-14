import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-word-counter',
  imports: [FormsModule],
  templateUrl: './word-counter.html',
  styleUrl: './word-counter.css'
})
export class WordCounter {
  inputText = '';

  get wordCount(): number {
    const text = this.inputText.trim();

    if (!text) {
      return 0;
    }

    return text.split(/\s+/).length;
  }

  get characterCount(): number {
    return this.inputText.length;
  }

  get characterCountWithoutSpaces(): number {
    return this.inputText.replace(/\s/g, '').length;
  }

  get lineCount(): number {
    if (!this.inputText) {
      return 0;
    }

    return this.inputText.split(/\r?\n/).length;
  }

  get sentenceCount(): number {
    const text = this.inputText.trim();

    if (!text) {
      return 0;
    }

    const sentences = text.match(/[^.!?]+[.!?]+/g);

    return sentences?.length ?? 0;
  }

  get paragraphCount(): number {
    const text = this.inputText.trim();

    if (!text) {
      return 0;
    }

    return text
      .split(/\n\s*\n/)
      .filter(paragraph => paragraph.trim().length > 0)
      .length;
  }

  get readingTime(): string {
    if (this.wordCount === 0) {
      return '0 min';
    }

    const wordsPerMinute = 200;
    const minutes = Math.ceil(
      this.wordCount / wordsPerMinute
    );

    return `${minutes} min`;
  }

  clear(): void {
    this.inputText = '';
  }

  async copyInput(): Promise<void> {
    if (!this.inputText) {
      return;
    }

    await navigator.clipboard.writeText(this.inputText);
  }
}