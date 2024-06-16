import { expect, test } from 'vitest'
import { DaysOfWeek, getActivity } from '../src/index.ts';

const weekdays = [
    DaysOfWeek.Monday,
    DaysOfWeek.Tuesday,
    DaysOfWeek.Wednesday,
    DaysOfWeek.Thursday,
    DaysOfWeek.Friday,
  ];

const weekend = [
    DaysOfWeek.Saturday,
    DaysOfWeek.Sunday,
];

test('Test Weekend activities', () => {
    for (const day of weekend) {
        expect(getActivity(day)).toBe('Rest');
    }
});

test('Test Weekdays activites', () => {
    for (const day of weekdays) {
        expect(getActivity(day)).toBe('Work');
    }
});