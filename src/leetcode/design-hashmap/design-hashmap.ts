class MyHashMap {
  constructor() {}

  store: Array<Array<{key: number; value: number}>> = []

  put(key: number, value: number): void {
    const array = this.getArrayOf(key)
    const keyIndex = array.findIndex(({key: k}) => k === key)
    if (keyIndex === -1) {
      array.push({key, value})
    } else {
      array.splice(keyIndex, 1, {key, value})
    }
  }

  get(key: number): number {
    return (
      this.getArrayOf(key).find(({key: k}) => {
        return k === key
      })?.value ?? -1
    )
  }

  remove(key: number): void {
    const array = this.getArrayOf(key)
    const index = array.findIndex(({key: k}) => {
      return k === key
    })
    if (index !== -1) {
      array.splice(index, 1)
    }
  }

  hash(key: number) {
    return key % 997
  }

  getArrayOf(key: number) {
    const index = this.hash(key)
    this.store[index] = this.store[index] || []
    return this.store[index]
  }
}
