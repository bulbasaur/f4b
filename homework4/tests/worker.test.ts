import { test, expect } from 'vitest';
import { Worker } from '../src/index.ts';

const worker = new Worker('Position', 30);

test('Test Worker class constructor', () => {
    expect(worker.position).toBe('Position');
    expect(worker.salary).toBe(30);
});

test('Test Worker class setter and getter', () => {
    worker.setSalary(40);
    expect(worker.getSalary()).toBe(40);
});