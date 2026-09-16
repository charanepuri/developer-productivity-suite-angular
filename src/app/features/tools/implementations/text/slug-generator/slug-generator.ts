import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Separator = '-' | '_' | '.';

@Component({
  selector: 'app-slug-generator',
  imports: [FormsModule],
  templateUrl: './slug-generator.html',
  styleUrl: './slug-generator.css'
})
export class SlugGenerator {
  inputText = '';
  separator: Separator = '-';

  readonly separatorOptions: {
    value: Separator;
    label: string;
  }[] = [
    {
      value: '-',
      label: 'Hyphen (-)'
    },
    {
      value: '_',
      label: 'Underscore (_)'
    },
    {
      value: '.',
      label: 'Dot (.)'
    }
  ];

  get slug(): string {
    return this.generateSlug(this.inputText);
  }

  get wordCount(): number {
    const text = this.inputText.trim();

    if (!text) {
      return 0;
    }

    return text.split(/\s+/).length;
  }

  get inputCharacterCount(): number {
    return this.inputText.length;
  }

  get slugCharacterCount(): number {
    return this.slug.length;
  }

  clear(): void {
    this.inputText = '';
  }

  async copySlug(): Promise<void> {
    if (!this.slug) {
      return;
    }

    await navigator.clipboard.writeText(this.slug);
  }

  private generateSlug(value: string): string {
    if (!value.trim()) {
      return '';
    }

    return value
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9\s_-]/g, '')
      .trim()
      .replace(/[\s_-]+/g, this.separator)
      .replace(
        new RegExp(`\\${this.separator}+`, 'g'),
        this.separator
      )
      .replace(
        new RegExp(
          `^\\${this.separator}|\\${this.separator}$`,
          'g'
        ),
        ''
      );
  }
}