import dayjs from 'dayjs';
import { getNextDays } from '.';
import { describe, expect, it } from 'vitest';

describe('getNextDays', () => {
  it('should return the next 4 days starting from tomorrow', () => {
    const result = getNextDays();
    const today = new Date();
    const expectedDays = [
      dayjs(today.setDate(today.getDate() + 1)).format('DD/MM'),
      dayjs(today.setDate(today.getDate() + 1)).format('DD/MM'),
      dayjs(today.setDate(today.getDate() + 1)).format('DD/MM'),
      dayjs(today.setDate(today.getDate() + 1)).format('DD/MM'),
    ];
    expect(result).toEqual(expectedDays);
  });
});
