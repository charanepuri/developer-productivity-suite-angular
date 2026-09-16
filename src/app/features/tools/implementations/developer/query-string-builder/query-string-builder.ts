import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface QueryParameter {
  key: string;
  value: string;
}

@Component({
  selector: 'app-query-string-builder',
  imports: [FormsModule],
  templateUrl: './query-string-builder.html',
  styleUrl: './query-string-builder.css'
})
export class QueryStringBuilder {
  baseUrl = 'https://example.com/search';

  parameters: QueryParameter[] = [
    {
      key: 'q',
      value: 'angular'
    },
    {
      key: 'page',
      value: '1'
    }
  ];

  get queryString(): string {
    const params = this.parameters.filter(
      parameter => parameter.key.trim()
    );

    if (!params.length) {
      return '';
    }

    const searchParams = new URLSearchParams();

    for (const parameter of params) {
      searchParams.append(
        parameter.key.trim(),
        parameter.value
      );
    }

    return `?${searchParams.toString()}`;
  }

  get fullUrl(): string {
    return `${this.baseUrl}${this.queryString}`;
  }

  addParameter(): void {
    this.parameters.push({
      key: '',
      value: ''
    });
  }

  removeParameter(index: number): void {
    this.parameters.splice(index, 1);
  }

  clear(): void {
    this.baseUrl = '';
    this.parameters = [];
  }

  reset(): void {
    this.baseUrl = 'https://example.com/search';

    this.parameters = [
      {
        key: 'q',
        value: 'angular'
      },
      {
        key: 'page',
        value: '1'
      }
    ];
  }

  async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.fullUrl);
  }
}