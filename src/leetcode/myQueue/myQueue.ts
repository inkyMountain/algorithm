// https://leetcode-cn.com/problems/implement-queue-using-stacks/

export class MyQueue {
  stack1: number[] = [];
  stack2: number[] = [];

  constructor() {}

  push(x: number) {
    this.stack1.push(x);
    return null;
  }

  pop(): number {
    const front = this.stack2.pop();
    if (front) {
      return front;
    }

    // stack1's length changes during the transfer, so store the initial length.
    const length = this.stack1.length;
    for (let i = 0; i < length; i++) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }

  peek(): number {
    if (this.stack2.length > 0) {
      return this.stack2[this.stack2.length - 1];
    }

    const length = this.stack1.length;
    for (let i = 0; i < length; i++) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2[this.stack2.length - 1];
  }

  empty(): boolean {
    return this.stack1.length + this.stack2.length === 0;
  }
}
