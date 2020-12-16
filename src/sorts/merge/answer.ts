// 归并排序
const sort = (array: Array<number>) => {
  for (let i = 1; i <= array.length; i *= 2) {
    for (let j = 0; j <= array.length; j += i * 2) {
      array = merge(array, j, j + i, j + i * 2);
    }
  }
  return array;
};

// 核心归并逻辑
const merge: Merge = (array, start, middle, end) => {
  if (start >= array.length) start = array.length - 1;
  if (middle > array.length) middle = array.length;
  if (end > array.length) end = array.length;

  let left = start;
  let right = middle;
  while (left < middle && right < end) {
    if (array[left] < array[right]) {
      left++;
      middle++;
    } else {
      const rightNumber = array.splice(right, 1);
      array.splice(left, 0, ...rightNumber);
      right++;
      left++;
      middle++;
    }
  }
  return array;
};

type Merge = (array: Array<number>, start: number, middle: number, end: number) => Array<number>;

export {sort, merge};
export default sort;
