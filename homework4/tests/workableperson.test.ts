import { test, expect } from 'vitest';
import { WorkablePerson } from '../src/index.ts';

const worker = new WorkablePerson('John', 40, 'Position', 30);

test('Test Worker class constructor', () => {
    expect(worker.name).toBe('John');
    expect(worker.age).toBe(40);
    expect(worker.position).toBe('Position');
    expect(worker.salary).toBe(30);
});