const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('pop removes and returns the top element of the stack', () => {
    stack.push(99);
    stack.push(66);
    const popped = stack.pop();
    expect(popped).toBe(99); // Medvetet fel i denna commit
    expect(stack.peek()).toBe(66); // Också medvetet fel i denna commit
});