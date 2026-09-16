export interface JsonParseResult {
  valid: boolean;
  data: unknown;
  error: string | null;
}

export interface JsonKeyInfo {
  key: string;
  path: string;
  type: string;
  value: string;
}

export function parseJson(value: string): JsonParseResult {
  if (!value.trim()) {
    return {
      valid: false,
      data: null,
      error: 'JSON input is empty.'
    };
  }

  try {
    return {
      valid: true,
      data: JSON.parse(value),
      error: null
    };
  } catch (error) {
    return {
      valid: false,
      data: null,
      error:
        error instanceof Error
          ? error.message
          : 'Invalid JSON.'
    };
  }
}

export function formatJson(
  value: string,
  indentation = 2
): JsonParseResult {
  const result = parseJson(value);

  if (!result.valid) {
    return result;
  }

  return {
    valid: true,
    data: JSON.stringify(
      result.data,
      null,
      indentation
    ),
    error: null
  };
}

export function minifyJson(
  value: string
): JsonParseResult {
  const result = parseJson(value);

  if (!result.valid) {
    return result;
  }

  return {
    valid: true,
    data: JSON.stringify(result.data),
    error: null
  };
}

export function getJsonType(value: unknown): string {
  if (value === null) {
    return 'null';
  }

  if (Array.isArray(value)) {
    return 'array';
  }

  return typeof value;
}

export function flattenJsonKeys(
  value: unknown,
  parentPath = '$'
): JsonKeyInfo[] {
  const result: JsonKeyInfo[] = [];

  if (
    value === null ||
    typeof value !== 'object'
  ) {
    return result;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      const path = `${parentPath}[${index}]`;

      result.push({
        key: `[${index}]`,
        path,
        type: getJsonType(item),
        value: stringifyValue(item)
      });

      result.push(
        ...flattenJsonKeys(item, path)
      );
    });

    return result;
  }

  Object.entries(value).forEach(
    ([key, item]) => {
      const path = `${parentPath}.${key}`;

      result.push({
        key,
        path,
        type: getJsonType(item),
        value: stringifyValue(item)
      });

      result.push(
        ...flattenJsonKeys(item, path)
      );
    }
  );

  return result;
}

export function stringifyValue(
  value: unknown
): string {
  if (
    value !== null &&
    typeof value === 'object'
  ) {
    return JSON.stringify(value);
  }

  return String(value);
}

export function jsonToCsv(
  data: unknown
): string {
  let rows: Record<string, unknown>[] = [];

  if (Array.isArray(data)) {
    if (
      data.every(
        item =>
          item !== null &&
          typeof item === 'object' &&
          !Array.isArray(item)
      )
    ) {
      rows = data as Record<string, unknown>[];
    } else {
      rows = data.map(value => ({
        value
      }));
    }
  } else if (
    data !== null &&
    typeof data === 'object'
  ) {
    rows = [data as Record<string, unknown>];
  } else {
    rows = [{ value: data }];
  }

  const headers = Array.from(
    new Set(
      rows.flatMap(row =>
        Object.keys(row)
      )
    )
  );

  if (!headers.length) {
    return '';
  }

  const escapeCsv = (value: unknown): string => {
    let text: string;

    if (
      value !== null &&
      typeof value === 'object'
    ) {
      text = JSON.stringify(value);
    } else {
      text = String(value ?? '');
    }

    return `"${text.replace(/"/g, '""')}"`;
  };

  const headerRow = headers
    .map(escapeCsv)
    .join(',');

  const dataRows = rows.map(row =>
    headers
      .map(header =>
        escapeCsv(row[header])
      )
      .join(',')
  );

  return [
    headerRow,
    ...dataRows
  ].join('\n');
}