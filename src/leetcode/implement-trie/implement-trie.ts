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
