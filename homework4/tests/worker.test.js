"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_ts_1 = require("../src/index.ts");
const worker = new index_ts_1.Worker('Position', 30);
(0, vitest_1.test)('Test Worker class constructor', () => {
    (0, vitest_1.expect)(worker.position).toBe('Position');
    (0, vitest_1.expect)(worker.salary).toBe(30);
});
(0, vitest_1.test)('Test Worker class setter and getter', () => {
    worker.setSalary(40);
    (0, vitest_1.expect)(worker.getSalary()).toBe(40);
});
