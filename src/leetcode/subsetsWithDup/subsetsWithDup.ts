// https://leetcode-cn.com/problems/subsets-ii/

export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result = [];
  const fragments = [];
  const recurse = (startIndex: number) => {
    result.push([...fragments]);
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue;
      }
      fragments.push(nums[i]);
      recurse(i + 1);
      fragments.pop();
    }
  };

  recurse(0);
  return result;
}

// Caveat⚠️⚠️⚠️⚠️: DO NOT USE A USED OBJECT TO RECORD USED VALUE LIKE THE
// FOLLOWING CODE, IT DOES NOT WORK!
// export function subsetsWithDup(nums: number[]): number[][] {
//   const result = [];
//   const fragments = [];
//   const recurse = (startIndex: number) => {
//     result.push([...fragments]);
//     const used = {}
//     for (let i = startIndex; i < nums.length; i++) {
//       if (used[nums[i]]) {
//         continue;
//       }
//       used[nums[i]] = true
//       fragments.push(nums[i]);
//       // recurse(i + 1);
//       fragments.pop();
//     }
//   };
//
//   recurse(0);
//   return result;
// }
