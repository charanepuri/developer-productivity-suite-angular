export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

export interface HslColor {
  h: number;
  s: number;
  l: number;
}

export function normalizeHex(hex: string): string {
  let value = hex.trim().replace('#', '');

  if (value.length === 3) {
    value = value
      .split('')
      .map(char => char + char)
      .join('');
  }

  return `#${value.toUpperCase()}`;
}

export function hexToRgb(hex: string): RgbColor | null {
  const normalized = normalizeHex(hex);

  if (!/^#[0-9A-F]{6}$/i.test(normalized)) {
    return null;
  }

  return {
    r: parseInt(normalized.substring(1, 3), 16),
    g: parseInt(normalized.substring(3, 5), 16),
    b: parseInt(normalized.substring(5, 7), 16)
  };
}

export function rgbToHex(rgb: RgbColor): string {
  const clamp = (value: number): number =>
    Math.max(0, Math.min(255, Math.round(value)));

  const toHex = (value: number): string =>
    clamp(value).toString(16).padStart(2, '0');

  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`.toUpperCase();
}

export function rgbToHsl(rgb: RgbColor): HslColor {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;

  const l = (max + min) / 2;
  const delta = max - min;

  if (delta !== 0) {
    s = l > 0.5
      ? delta / (2 - max - min)
      : delta / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
        break;

      case g:
        h = ((b - r) / delta + 2) / 6;
        break;

      case b:
        h = ((r - g) / delta + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

export function hslToRgb(hsl: HslColor): RgbColor {
  const h = hsl.h / 360;
  const s = hsl.s / 100;
  const l = hsl.l / 100;

  if (s === 0) {
    const value = Math.round(l * 255);

    return {
      r: value,
      g: value,
      b: value
    };
  }

  const hueToRgb = (p: number, q: number, t: number): number => {
    let adjusted = t;

    if (adjusted < 0) adjusted += 1;
    if (adjusted > 1) adjusted -= 1;

    if (adjusted < 1 / 6) {
      return p + (q - p) * 6 * adjusted;
    }

    if (adjusted < 1 / 2) {
      return q;
    }

    if (adjusted < 2 / 3) {
      return p + (q - p) * (2 / 3 - adjusted) * 6;
    }

    return p;
  };

  const q =
    l < 0.5
      ? l * (1 + s)
      : l + s - l * s;

  const p = 2 * l - q;

  return {
    r: Math.round(hueToRgb(p, q, h + 1 / 3) * 255),
    g: Math.round(hueToRgb(p, q, h) * 255),
    b: Math.round(hueToRgb(p, q, h - 1 / 3) * 255)
  };
}

export function rgbToCss(rgb: RgbColor): string {
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

export function relativeLuminance(rgb: RgbColor): number {
  const values = [rgb.r, rgb.g, rgb.b].map(value => {
    const channel = value / 255;

    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  });

  return (
    0.2126 * values[0] +
    0.7152 * values[1] +
    0.0722 * values[2]
  );
}

export function contrastRatio(
  foreground: RgbColor,
  background: RgbColor
): number {
  const first = relativeLuminance(foreground);
  const second = relativeLuminance(background);

  const lighter = Math.max(first, second);
  const darker = Math.min(first, second);

  return (lighter + 0.05) / (darker + 0.05);
}