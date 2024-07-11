import { describe, it, expect } from 'vitest';
import { convertToFahrenheit } from '.';

describe('convertToFahrenheit', () => {
  it('should convert Celsius to Fahrenheit correctly', () => {
    expect(convertToFahrenheit(0)).toBe(32);
    expect(convertToFahrenheit(100)).toBe(212);
    expect(convertToFahrenheit(-40)).toBe(-40);
  });

  it('should handle fractional temperatures correctly', () => {
    expect(convertToFahrenheit(25.5)).toBe(78);
    expect(convertToFahrenheit(-10.5)).toBe(13);
  });

  it('should handle edge cases', () => {
    expect(convertToFahrenheit(Number.MAX_SAFE_INTEGER)).toBe(
      Math.round((Number.MAX_SAFE_INTEGER * 9) / 5 + 32)
    );
    expect(convertToFahrenheit(Number.MIN_SAFE_INTEGER)).toBe(
      Math.round((Number.MIN_SAFE_INTEGER * 9) / 5 + 32)
    );
  });
});
