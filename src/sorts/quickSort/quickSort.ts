export const sort = (array: Array<number>): Array<number> => {
  // if it's a one-number array or empty one, return it directly.
  if (array.length === 1) {
    return array
  }
  return _sort(array, 0, array.length - 1)
}

const _sort = (
  array: Array<number>,
  start: number,
  end: number
): Array<number> => {
  if (start >= end) {
    return
  }
  const pivot = array[start]
  let left = 0
  let right = 0
  let index = start + 1
  while (left + right < end - start) {
    if (pivot > array[index]) {
      left++
      index++
    } else {
      // this's an error i ever made.
      // DO NOT use array.length - right - 1.
      swap(array, index, end - right)
      right++
    }
  }
  swap(array, start + left, start)

  _sort(array, start, start + left - 1)
  _sort(array, start + left + 1, end)
  return array
}

const swap = (array: Array<number>, index1: number, index2: number) => {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}
