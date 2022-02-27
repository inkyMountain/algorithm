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
  start: number,
  middle: number,
  right: number
) {
  right = Math.min(array.length - 1, right)
  while (start <= middle && middle < right) {
    const value1 = array[start]
    const value2 = array[middle + 1]
    if (value1 < value2) {
      start++
    } else {
      const smallerValue = array.splice(middle + 1, 1)
      array.splice(start, 0, smallerValue[0])
      start++
      middle++
    }
  }
}
