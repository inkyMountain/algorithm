// https://leetcode-cn.com/problems/intersection-of-two-arrays/

export const arrayIntersection = (
  nums1: number[],
  nums2: number[]
): number[] => {
  const intersection = [];

  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const biggerSet = set1.size > set2.size ? set1 : set2;
  const smallerSet = set1.size > set2.size ? set2 : set1;

  // If a number in bigger set appears in smaller set too,
  // it's one of the intersection.
  for (const num of biggerSet) {
    if (smallerSet.has(num)) {
      intersection.push(num);
    }
  }

  return intersection;
};
