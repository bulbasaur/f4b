import { expect, test } from 'vitest'
import { Queue } from '../src/index.ts';

test('Test Queue with numbers', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
});

test('Test Queue with strings', () => {
    const queue = new Queue<string>();
    queue.enqueue('Hello');
    queue.enqueue('World');
    expect(queue.dequeue()).toBe('Hello');
    expect(queue.dequeue()).toBe('World');
});

test('Test Queue with empty dequeue', () => {
    const queue = new Queue<any>();
    expect(queue.dequeue()).toBe(undefined);
});

test('Test Queue<string> with numbers', () => {
    const queue = new Queue<string>();

    // @ts-expect-error 1 is not a string
    queue.enqueue(1);
});

test('Test Queue<number> with strings', () => {
    const queue = new Queue<number>();

    // @ts-expect-error Hello is not a number
    queue.enqueue('Hello');
});