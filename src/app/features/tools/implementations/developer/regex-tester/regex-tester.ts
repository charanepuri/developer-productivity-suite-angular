import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface RegexMatch {
  value: string;
  index: number;
}

@Component({
  selector: 'app-regex-tester',
  imports: [FormsModule],
  templateUrl: './regex-tester.html',
  styleUrl: './regex-tester.css'
})
export class RegexTester {
  pattern = '\\b\\w+@\\w+\\.\\w+\\b';
  flags = 'gi';

  text = `Contact us at hello@example.com or support@example.com.`;

  matches: RegexMatch[] = [];
  error = '';

  testRegex(): void {
    this.matches = [];
    this.error = '';

    try {
      const regex = new RegExp(this.pattern, this.flags);
      const globalRegex = regex.global
        ? regex
        : new RegExp(this.pattern, `${this.flags}g`);

      let match: RegExpExecArray | null;

      while ((match = globalRegex.exec(this.text)) !== null) {
        this.matches.push({
          value: match[0],
          index: match.index
        });

        if (match[0] === '') {
          globalRegex.lastIndex++;
        }
      }
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : 'Invalid regular expression.';
    }
  }

  get matchCount(): number {
    return this.matches.length;
  }

  reset(): void {
    this.pattern = '\\b\\w+@\\w+\\.\\w+\\b';
    this.flags = 'gi';
    this.text = `Contact us at hello@example.com or support@example.com.`;
    this.matches = [];
    this.error = '';
  }
}