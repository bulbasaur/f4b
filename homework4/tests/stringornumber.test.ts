import { expect, expectTypeOf, test } from 'vitest'
import { StringOrNumber } from '../src/index.ts';

test('Test StringOrNumber with string', () => {
    const value: StringOrNumber = 'Hello';
    expect(value).toBe('Hello');
    expectTypeOf(value).toEqualTypeOf<string>();
});

test('Test StringOrNumber with number', () => {
    const value: StringOrNumber = 1;
    expect(value).toBe(1);
    expectTypeOf(value).toEqualTypeOf<number>();
});

test('Test StringOrNumber with boolean', () => {
    // @ts-expect-error true is not a string or number
    const value: StringOrNumber = true;
});