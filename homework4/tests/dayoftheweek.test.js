"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_ts_1 = require("../src/index.ts");
const weekdays = [
    index_ts_1.DaysOfWeek.Monday,
    index_ts_1.DaysOfWeek.Tuesday,
    index_ts_1.DaysOfWeek.Wednesday,
    index_ts_1.DaysOfWeek.Thursday,
    index_ts_1.DaysOfWeek.Friday,
];
const weekend = [
    index_ts_1.DaysOfWeek.Saturday,
    index_ts_1.DaysOfWeek.Sunday,
];
(0, vitest_1.test)('Test Weekend activities', () => {
    for (const day of weekend) {
        (0, vitest_1.expect)((0, index_ts_1.getActivity)(day)).toBe('Rest');
    }
});
(0, vitest_1.test)('Test Weekdays activites', () => {
    for (const day of weekdays) {
        (0, vitest_1.expect)((0, index_ts_1.getActivity)(day)).toBe('Work');
    }
});
