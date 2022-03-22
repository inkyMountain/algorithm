// leetcode 253
function minMeetingRooms(intervals: number[][]): number {
  /**
   * time n, time nlogn
   * 遍历 intervals，将 start & end 放入单独的数组，并排序。
   * time n
   * 双指针，指向 start end 数组的最左侧，每次处理较小的那个。
   * 每次start更小，则并发数+1。每次end更小，并发数-1。
   * 将过程中记录到的最大并发数作为答案返回。
   * space n
   */
  const starts: number[] = []
  const ends: number[] = []
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i]
    starts.push(start)
    ends.push(end)
  }
  starts.sort((a, b) => a - b)
  ends.sort((a, b) => a - b)

  let startIndex = 0,
    endIndex = 0,
    result = 1,
    roomNumber = 0
  while (startIndex < starts.length && endIndex < ends.length) {
    if (starts[startIndex] < ends[endIndex]) {
      startIndex++
      roomNumber++
      result = Math.max(result, roomNumber)
    } else {
      endIndex++
      roomNumber--
    }
  }
  return result
}

describe('meeting room2', () => {
  test('minMeetingRooms', () => {
    expect(
      minMeetingRooms([
        [1, 2],
        [3, 4],
      ])
    ).toStrictEqual(1)

    expect(
      minMeetingRooms([
        [1, 3],
        [3, 4],
      ])
    ).toStrictEqual(1)

    expect(
      minMeetingRooms([
        [1, 3],
        [2, 4],
      ])
    ).toStrictEqual(2)

    expect(
      minMeetingRooms([
        [1, 4],
        [2, 4],
        [3, 4],
        [5, 8],
      ])
    ).toStrictEqual(3)
  })
})
