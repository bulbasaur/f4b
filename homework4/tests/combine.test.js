"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_ts_1 = require("../src/index.ts");
(0, vitest_1.test)('Test combine with strings', () => {
    (0, vitest_1.expect)((0, index_ts_1.combine)('Hello', 'World')).toBe('Hello World');
});
(0, vitest_1.test)('Test combine with numbers', () => {
    (0, vitest_1.expect)((0, index_ts_1.combine)(1, 2)).toBe(3);
});
(0, vitest_1.test)('Test combine with string and number', () => {
    // Don't know why need to write () => combine...
    // Initial code: expect(combine('Hello', 2)).toThrowError();
    (0, vitest_1.expect)(() => (0, index_ts_1.combine)('Hello', 2)).toThrowError();
});
