"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_ts_1 = require("../src/index.ts");
(0, vitest_1.test)('Test Queue with numbers', () => {
    const queue = new index_ts_1.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    (0, vitest_1.expect)(queue.dequeue()).toBe(1);
    (0, vitest_1.expect)(queue.dequeue()).toBe(2);
});
(0, vitest_1.test)('Test Queue with strings', () => {
    const queue = new index_ts_1.Queue();
    queue.enqueue('Hello');
    queue.enqueue('World');
    (0, vitest_1.expect)(queue.dequeue()).toBe('Hello');
    (0, vitest_1.expect)(queue.dequeue()).toBe('World');
});
(0, vitest_1.test)('Test Queue with empty dequeue', () => {
    const queue = new index_ts_1.Queue();
    (0, vitest_1.expect)(queue.dequeue()).toBe(undefined);
});
(0, vitest_1.test)('Test Queue<string> with numbers', () => {
    const queue = new index_ts_1.Queue();
    // @ts-expect-error 1 is not a string
    queue.enqueue(1);
});
(0, vitest_1.test)('Test Queue<number> with strings', () => {
    const queue = new index_ts_1.Queue();
    // @ts-expect-error Hello is not a number
    queue.enqueue('Hello');
});
