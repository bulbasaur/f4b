"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
(0, vitest_1.test)('Test StringOrNumber with string', () => {
    const value = 'Hello';
    (0, vitest_1.expect)(value).toBe('Hello');
    (0, vitest_1.expectTypeOf)(value).toEqualTypeOf();
});
(0, vitest_1.test)('Test StringOrNumber with number', () => {
    const value = 1;
    (0, vitest_1.expect)(value).toBe(1);
    (0, vitest_1.expectTypeOf)(value).toEqualTypeOf();
});
(0, vitest_1.test)('Test StringOrNumber with boolean', () => {
    // @ts-expect-error true is not a string or number
    const value = true;
});
