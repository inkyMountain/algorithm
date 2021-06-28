// https://leetcode-cn.com/problems/permutations/

export function permute(nums: number[]): number[][] {
  const permutations = []
  const fragments = []
  const used = new Array(nums.length).fill(false)
  const recurse = () => {
    if (fragments.length === nums.length) {
      permutations.push([...fragments])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue
      }
      fragments.push(nums[i])
      used[i] = true
      recurse()
      used[i] = false
      fragments.pop()
    }
  }
  recurse()
  return permutations
}
