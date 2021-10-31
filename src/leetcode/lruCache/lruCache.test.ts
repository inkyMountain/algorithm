import {LRUCache} from './lruCache'

const generateLRUResult = (operations, args) => {
  let cache: LRUCache
  const result = []
  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i]
    const [arg1, arg2] = args[i]
    switch (operation) {
      case 'LRUCache': {
        cache = new LRUCache(arg1)
        result.push(null)
        break
      }
      case 'put': {
        result.push(cache.put(arg1, arg2))
        break
      }
      case 'get': {
        result.push(cache.get(arg1))
        break
      }
    }
  }
  return result
}

describe('lruCache', () => {
  it('lruCache0', () => {
    const operations = [
      'LRUCache',
      'put',
      'put',
      'get',
      'put',
      'get',
      'put',
      'get',
      'get',
      'get',
    ]
    const args = [
      // constructor
      [2],
      [1, 1],
      [2, 2],
      [1],
      [3, 3],
      [2],
      [4, 4],
      [1],
      [3],
      [4],
    ]

    const result = generateLRUResult(operations, args)

    expect(result).toStrictEqual([
      null,
      null,
      null,
      1,
      null,
      -1,
      null,
      -1,
      3,
      4,
    ])
  })

  it('lruCache1', () => {
    const operations = [
      'LRUCache',
      'get',
      'put',
      'get',
      'put',
      'put',
      'get',
      'get',
    ]
    const args = [
      // constructor
      [2],
      [2],
      [2, 6],
      [1],
      [1, 5],
      [1, 2],
      [1],
      [2],
    ]

    const result = generateLRUResult(operations, args)

    expect(result).toStrictEqual([null, -1, null, -1, null, null, 2, 6])
  })

  it('lruCache2', () => {
    const operations = ['LRUCache', 'put', 'put', 'put', 'put', 'get', 'get']
    const args = [[2], [2, 1], [1, 1], [2, 3], [4, 1], [1], [2]]

    const result = generateLRUResult(operations, args)

    expect(result).toStrictEqual([null, null, null, null, null, -1, 3])
  })
})
