import { test, expect } from 'vitest';
import { combine } from '../src/index.ts';

test('Test combine with strings', () => {
    expect(combine('Hello', 'World')).toBe('Hello World');
});

test('Test combine with numbers', () => {
    expect(combine(1, 2)).toBe(3);
});

test('Test combine with string and number', () => {
    // Don't know why need to write () => combine...
    // Initial code: expect(combine('Hello', 2)).toThrowError();
    expect(() => combine('Hello', 2)).toThrowError();
});