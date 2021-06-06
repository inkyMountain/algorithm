// https://leetcode-cn.com/problems/implement-stack-using-queues/

export class MyStack {
  queue = [];
  temp = [];

  push(x: number): void {
    while (this.queue.length !== 0) {
      this.temp.push(this.queue.shift())
    }
    this.queue.push(x)
    while (this.temp.length !== 0) {
      this.queue.unshift(this.temp.pop())
    }
  }

  pop(): number {
    return this.queue.pop()
  }

  top(): number {
    return this.queue[this.queue.length - 1]
  }

  empty(): boolean {
    return this.queue.length === 0
  }
}
