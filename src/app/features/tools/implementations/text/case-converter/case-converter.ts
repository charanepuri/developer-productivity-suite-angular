import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type CaseOption =
  | 'uppercase'
  | 'lowercase'
  | 'title'
  | 'sentence'
  | 'camel'
  | 'pascal'
  | 'snake'
  | 'kebab';

@Component({
  selector: 'app-case-converter',
  imports: [FormsModule],
  templateUrl: './case-converter.html',
  styleUrl: './case-converter.css'
})
export class CaseConverter {
  inputText = '';
  selectedCase: CaseOption = 'uppercase';

  readonly caseOptions: {
    value: CaseOption;
    label: string;
  }[] = [
    { value: 'uppercase', label: 'UPPERCASE' },
    { value: 'lowercase', label: 'lowercase' },
    { value: 'title', label: 'Title Case' },
    { value: 'sentence', label: 'Sentence case' },
    { value: 'camel', label: 'camelCase' },
    { value: 'pascal', label: 'PascalCase' },
    { value: 'snake', label: 'snake_case' },
    { value: 'kebab', label: 'kebab-case' }
  ];

  get outputText(): string {
    switch (this.selectedCase) {
      case 'uppercase':
        return this.inputText.toUpperCase();

      case 'lowercase':
        return this.inputText.toLowerCase();

      case 'title':
        return this.toTitleCase(this.inputText);

      case 'sentence':
        return this.toSentenceCase(this.inputText);

      case 'camel':
        return this.toCamelCase(this.inputText);

      case 'pascal':
        return this.toPascalCase(this.inputText);

      case 'snake':
        return this.toSnakeCase(this.inputText);

      case 'kebab':
        return this.toKebabCase(this.inputText);

      default:
        return this.inputText;
    }
  }

  clear(): void {
    this.inputText = '';
  }

  copyOutput(): void {
    if (!this.outputText) return;

    void navigator.clipboard.writeText(this.outputText);
  }

  private normalizeWords(value: string): string[] {
    return value
      .trim()
      .split(/[\s_-]+/)
      .filter(Boolean)
      .map(word => word.toLowerCase());
  }

  private capitalize(value: string): string {
    if (!value) return '';

    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  private toTitleCase(value: string): string {
    return value
      .toLowerCase()
      .replace(/\b\w/g, character => character.toUpperCase());
  }

  private toSentenceCase(value: string): string {
    const lower = value.toLowerCase();

    return lower.replace(
      /(^\s*[a-z])|([.!?]\s*[a-z])/g,
      match => match.toUpperCase()
    );
  }

  private toCamelCase(value: string): string {
    const words = this.normalizeWords(value);

    return words
      .map((word, index) =>
        index === 0 ? word : this.capitalize(word)
      )
      .join('');
  }

  private toPascalCase(value: string): string {
    return this.normalizeWords(value)
      .map(word => this.capitalize(word))
      .join('');
  }

  private toSnakeCase(value: string): string {
    return this.normalizeWords(value).join('_');
  }

  private toKebabCase(value: string): string {
    return this.normalizeWords(value).join('-');
  }
}