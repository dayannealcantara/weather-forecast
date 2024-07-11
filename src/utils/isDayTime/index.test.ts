import { describe, it, expect, vi } from 'vitest';
import { isDayTime } from '.';

describe('isDayTime', () => {
  it('should return true during the day (7 AM)', () => {
    const dateSpy = vi.spyOn(Date.prototype, 'getHours').mockReturnValue(7);
    expect(isDayTime()).toBe(true);
    dateSpy.mockRestore();
  });

  it('should return true during the day (12 PM)', () => {
    const dateSpy = vi.spyOn(Date.prototype, 'getHours').mockReturnValue(12);
    expect(isDayTime()).toBe(true);
    dateSpy.mockRestore();
  });

  it('should return true during the day (5 PM)', () => {
    const dateSpy = vi.spyOn(Date.prototype, 'getHours').mockReturnValue(17);
    expect(isDayTime()).toBe(true);
    dateSpy.mockRestore();
  });

  it('should return false during the night (6 AM)', () => {
    const dateSpy = vi.spyOn(Date.prototype, 'getHours').mockReturnValue(6);
    expect(isDayTime()).toBe(false);
    dateSpy.mockRestore();
  });

  it('should return false during the night (6 PM)', () => {
    const dateSpy = vi.spyOn(Date.prototype, 'getHours').mockReturnValue(18);
    expect(isDayTime()).toBe(false);
    dateSpy.mockRestore();
  });

  it('should return false during the night (11 PM)', () => {
    const dateSpy = vi.spyOn(Date.prototype, 'getHours').mockReturnValue(23);
    expect(isDayTime()).toBe(false);
    dateSpy.mockRestore();
  });
});
