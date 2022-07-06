function mergeSort(arr) {
  let subarrayLength = 1
  const length = arr.length
  while (subarrayLength < length) {
    let startIndex = 0
    while (length - startIndex > subarrayLength) {
      merge(
        arr,
        startIndex,
        startIndex + subarrayLength - 1,
        startIndex + subarrayLength,
        Math.min(startIndex + subarrayLength * 2 - 1, length - 1)
      )
      startIndex += subarrayLength * 2
    }
    subarrayLength *= 2
  }
  return arr
}

const temp = []
function merge(arr, start1, end1, start2, end2) {
  let index1 = start1,
    index2 = start2,
    index = 0
  while (index1 <= end1 && index2 <= end2) {
    if (arr[index1] < arr[index2]) {
      temp[index] = arr[index1]
      index1++
    } else {
      temp[index] = arr[index2]
      index2++
    }
    index++
  }
  let slowIndex = index1 <= end1 ? index1 : index2
  const end = index1 <= end1 ? end1 : end2
  while (slowIndex <= end) {
    temp[index] = arr[slowIndex]
    slowIndex++
  }
  for (let i = 0; i <= index; i++) {
    arr[i + start1] = temp[i]
  }
}

console.log(mergeSort([1, 4, 2, 3, 8, 0, 3]))
