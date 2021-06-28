// https://leetcode-cn.com/problems/permutations/

export function permuteUnique(nums: number[]): number[][] {
  const permutations = []
  const fragments = []
  nums = nums.sort((a, b) => a - b)
  const used = new Array(nums.length).fill(false)
  const recurse = () => {
    if (fragments.length === nums.length) {
      permutations.push([...fragments])
      return
    }
    let previous
    for (let i = 0; i < nums.length; i++) {
      // in combination problem, we usually compare nums[i] with nums[i - 1].
      // but in permutation, nums[i - 1] might be used by upper layer.
      // the item we should compare may be prepre...previous one, so we use
      // pointer named previous use keep quote of it.
      if (used[i] || nums[i] === previous) {
        continue
      }
      previous = nums[i]
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
