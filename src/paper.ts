export function mergeSort(array: Array<number>) {
  let sublength = 1
  // 确保数组仍可以被分割为 >= 2块
  while (array.length > sublength) {
    let index = 0
    // 确保第二块的长度 >= 1
    while (array.length - index > sublength) {
      merge(
        array,
        index,
        index + sublength - 1,
        index + sublength,
        index + sublength * 2 - 1
      )
      index = index + sublength * 2
    }
    sublength = sublength * 2
  }
  return array
}

function merge(
  array: Array<number>,
  start1: number,
  end1: number,
  start2: number,
  end2: number
) {
  end2 = Math.min(array.length - 1, end2)
  while (start1 <= end1 && start2 <= end2) {
    const value1 = array[start1]
    const value2 = array[start2]
    if (value1 < value2) {
      start1++
    } else {
      const smallerValue = array.splice(start2, 1)
      array.splice(start1, 0, smallerValue[0])
      start1++
      end1++
      start2++
    }
  }
}
