import { describe, expect, it } from 'vitest';
import { getFormattedTemperature } from '.';

describe('getFormattedTemperature', () => {
  it('should return temperature in Celsius', () => {
    const temp = 20;
    const isCelsius = true;
    const expected = '20ºC';
    const result = getFormattedTemperature(temp, isCelsius);
    expect(result).toBe(expected);
  });

  it('should convert temperature to Fahrenheit if not in Celsius', () => {
    const temp = 20;
    const isCelsius = false;

    const expected = '68ºF';
    const result = getFormattedTemperature(temp, isCelsius);
    expect(result).toBe(expected);
  });
});
