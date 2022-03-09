/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
interface TrieNode {
  count?: number
  value?: Record<string, TrieNode>
}
class Trie {
  tree: TrieNode = {}
  constructor() {}

  insert(word: string): void {
    let current = this.tree
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (!current[char]) {
        current[char] = {
          count: 0,
          value: {},
        }
      }
      current = current[char]
      if (i === word.length - 1) {
        current.count++
      }
    }
  }

  search(word: string): boolean {
    let current = this.tree
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (!current[char]) {
        return false
      }
      if (i === word.length - 1) {
        return current[char].count > 0
      }
      current = current[char]
    }
  }

  startsWith(prefix: string): boolean {
    let current = this.tree
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i]
      if (!current[char]) {
        return false
      }
      current = current[char]
    }
    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

export const trie = new Trie()
trie.insert('hello')
trie.insert('hello')
const result = trie.startsWith('hell')
const result2 = trie.search('hell')
const result3 = trie.search('hello')
console.log(result, result2, result3)
