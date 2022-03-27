export const xxx = ''
/*
 * @lc app=leetcode.cn id=1233 lang=typescript
 *
 * [1233] 删除子文件夹
 */

// @lc code=start
function removeSubfolders(folder: string[]): string[] {
  /**
   * 时间复杂度：O(mn) 空间复杂度：O(mn)
   *
   * 文件数：n 路径长度：m
   * 首先遍历 folder 来建树。然后遍历树，每条路径取起点到第一个 isEnd 为 true 的范围。
   */
  const root = new Trie()
  for (let i = 0; i < folder.length; i++) {
    const path = folder[i]
    root.add(path)
  }

  const result = []
  for (let i = 0; i < folder.length; i++) {
    const path = folder[i]
    if (root.ok(path)) {
      result.push(path)
    }
  }
  return result
}

class Trie {
  children: Record<string, Trie> = {}
  isEnd = false

  constructor(isEnd: boolean = false) {
    this.isEnd = isEnd
  }

  add(this: Trie, path: string) {
    const segments = path.split('/').filter(Boolean)
    let current = this
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i]
      current.children[segment] = current.children[segment] || new Trie()
      current = current.children[segment]
    }
    current.isEnd = true
  }

  ok(this: Trie, path: string): boolean {
    const segments = path.split('/').filter(Boolean)
    let current = this
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i]
      const node = current.children[segment]
      if (i !== segments.length - 1 && node.isEnd) {
        return false
      }
      current = node
    }
    return true
  }
}

// @lc code=end

describe('remove-sub-folders-from-the-filesystem', () => {
  test('removeSubfolders', () => {
    expect(
      removeSubfolders(['/a/b', '/c', '/a/c', '/a/b/c', '/a'])
    ).toStrictEqual(['/c', '/a'])
    expect(
      removeSubfolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'])
    ).toStrictEqual(['/a', '/c/d', '/c/f'])
  })
})
