type SumIndexOfTarget = (numbers: Array<number>, target: number) => [number, number] | []

// 暴力枚举法 时间复杂度：O(n^2) 空间复杂度：O(1)
const violence: SumIndexOfTarget = (numbers, target) => {
  return numbers
    .reduce<[] | [number, number]>(
      (accumulate, number, index) => {
        const anotherIndex = numbers.findIndex(n => n === target - number);
        const isValidIndices = anotherIndex !== -1 && anotherIndex !== index;
        return isValidIndices ? [index, anotherIndex] : accumulate;
      }
      , [])
    .sort((a, b) => a - b);
};

// 哈希表查找，使用空间换时间。时间复杂度：O(n) 空间复杂度：O(n)
// 首先在map中没有找到匹配的key，那么就将当前遍历的数字匹配的数字作为key，
// 这样当遍历到这个匹配的数字时，map.has为true，就可以取到原先那个数字的index了。
const hash = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(target - nums[i], i);
    }
  }
};

export default {
  violence,
  hash
};
