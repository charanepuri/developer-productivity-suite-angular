export interface MarkdownHeading {
  level: number;
  text: string;
  slug: string;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

export function markdownToHtml(markdown: string): string {
  if (!markdown.trim()) {
    return '';
  }

  let html = escapeHtml(markdown);

  html = html.replace(
    /^### (.+)$/gm,
    '<h3>$1</h3>'
  );

  html = html.replace(
    /^## (.+)$/gm,
    '<h2>$1</h2>'
  );

  html = html.replace(
    /^# (.+)$/gm,
    '<h1>$1</h1>'
  );

  html = html.replace(
    /^\> (.+)$/gm,
    '<blockquote>$1</blockquote>'
  );

  html = html.replace(
    /^\- (.+)$/gm,
    '<li>$1</li>'
  );

  html = html.replace(
    /(<li>.*<\/li>\n?)+/g,
    match => `<ul>${match}</ul>`
  );

  html = html.replace(
    /\*\*(.+?)\*\*/g,
    '<strong>$1</strong>'
  );

  html = html.replace(
    /\*(.+?)\*/g,
    '<em>$1</em>'
  );

  html = html.replace(
    /`([^`]+)`/g,
    '<code>$1</code>'
  );

  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  const lines = html.split('\n');

  const processed: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (
      !trimmed ||
      trimmed.startsWith('<h1>') ||
      trimmed.startsWith('<h2>') ||
      trimmed.startsWith('<h3>') ||
      trimmed.startsWith('<ul>') ||
      trimmed.startsWith('<li>') ||
      trimmed.startsWith('<blockquote>')
    ) {
      processed.push(line);
      continue;
    }

    if (
      trimmed.startsWith('</ul>') ||
      trimmed.startsWith('</blockquote>')
    ) {
      processed.push(line);
      continue;
    }

    processed.push(`<p>${line}</p>`);
  }

  return processed.join('\n');
}

export function extractHeadings(markdown: string): MarkdownHeading[] {
  const headings: MarkdownHeading[] = [];

  for (const line of markdown.split('\n')) {
    const match = /^(#{1,3})\s+(.+)$/.exec(line.trim());

    if (!match) {
      continue;
    }

    const level = match[1].length;
    const text = match[2].trim();

    headings.push({
      level,
      text,
      slug: slugify(text)
    });
  }

  return headings;
}