// leetcode 155
/**
 * 使用双栈，其中一个(a)存储值，另一个(b)存储a中相同位置的最小值。
 * 比如栈中的值是 1,2,3 ，那么push新值，就会产生一个新的最小值。
 * pop该新值后，同步pop b中的栈顶，就可以重新得到1,2,3对应的最小值了。
 */
export class MinStack {
  stack: number[] = []
  mins: number[] = []
  constructor() {}

  push(val: number): void {
    this.stack.push(val)
    const minsTop = this.mins[this.mins.length - 1] ?? Infinity
    this.mins.push(Math.min(minsTop, val))
  }

  pop(): void {
    this.stack.pop()
    this.mins.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.mins[this.mins.length - 1]
  }
}
