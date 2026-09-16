import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface HttpStatus {
  code: number;
  name: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-http-status-code-lookup',
  imports: [FormsModule],
  templateUrl: './http-status-code-lookup.html',
  styleUrl: './http-status-code-lookup.css'
})
export class HttpStatusCodeLookup {
  search = '';

  readonly statuses: readonly HttpStatus[] = [
    {
      code: 100,
      name: 'Continue',
      description: 'The request headers have been received and the client may continue.',
      category: '1xx Informational'
    },
    {
      code: 200,
      name: 'OK',
      description: 'The request was successful.',
      category: '2xx Success'
    },
    {
      code: 201,
      name: 'Created',
      description: 'The request succeeded and created a new resource.',
      category: '2xx Success'
    },
    {
      code: 204,
      name: 'No Content',
      description: 'The request succeeded with no response content.',
      category: '2xx Success'
    },
    {
      code: 301,
      name: 'Moved Permanently',
      description: 'The requested resource has a new permanent URL.',
      category: '3xx Redirection'
    },
    {
      code: 302,
      name: 'Found',
      description: 'The requested resource is temporarily available at another URL.',
      category: '3xx Redirection'
    },
    {
      code: 304,
      name: 'Not Modified',
      description: 'The resource has not changed since the requested version.',
      category: '3xx Redirection'
    },
    {
      code: 400,
      name: 'Bad Request',
      description: 'The server cannot process the request because it is invalid.',
      category: '4xx Client Error'
    },
    {
      code: 401,
      name: 'Unauthorized',
      description: 'Authentication is required or has failed.',
      category: '4xx Client Error'
    },
    {
      code: 403,
      name: 'Forbidden',
      description: 'The server understood the request but refuses to authorize it.',
      category: '4xx Client Error'
    },
    {
      code: 404,
      name: 'Not Found',
      description: 'The requested resource could not be found.',
      category: '4xx Client Error'
    },
    {
      code: 405,
      name: 'Method Not Allowed',
      description: 'The HTTP method is not supported for the requested resource.',
      category: '4xx Client Error'
    },
    {
      code: 408,
      name: 'Request Timeout',
      description: 'The server timed out waiting for the request.',
      category: '4xx Client Error'
    },
    {
      code: 409,
      name: 'Conflict',
      description: 'The request conflicts with the current state of the resource.',
      category: '4xx Client Error'
    },
    {
      code: 422,
      name: 'Unprocessable Content',
      description: 'The request is syntactically valid but cannot be processed.',
      category: '4xx Client Error'
    },
    {
      code: 429,
      name: 'Too Many Requests',
      description: 'The client has sent too many requests in a given period.',
      category: '4xx Client Error'
    },
    {
      code: 500,
      name: 'Internal Server Error',
      description: 'The server encountered an unexpected condition.',
      category: '5xx Server Error'
    },
    {
      code: 501,
      name: 'Not Implemented',
      description: 'The server does not support the functionality required.',
      category: '5xx Server Error'
    },
    {
      code: 502,
      name: 'Bad Gateway',
      description: 'The server received an invalid response from an upstream server.',
      category: '5xx Server Error'
    },
    {
      code: 503,
      name: 'Service Unavailable',
      description: 'The server is currently unable to handle the request.',
      category: '5xx Server Error'
    },
    {
      code: 504,
      name: 'Gateway Timeout',
      description: 'An upstream server failed to respond in time.',
      category: '5xx Server Error'
    }
  ];

  get filteredStatuses(): HttpStatus[] {
    const query = this.search.trim().toLowerCase();

    if (!query) {
      return [...this.statuses];
    }

    return this.statuses.filter(status =>
      status.code.toString().includes(query) ||
      status.name.toLowerCase().includes(query) ||
      status.description.toLowerCase().includes(query) ||
      status.category.toLowerCase().includes(query)
    );
  }

  clear(): void {
    this.search = '';
  }
}