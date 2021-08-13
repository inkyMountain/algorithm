import {canPartition} from './partitionEqualSubsetSum'

test('canPartition0', () => {
  expect(canPartition([1, 5, 11, 5])).toStrictEqual(true)
})

test('canPartition1', () => {
  expect(canPartition([1, 2, 3, 5])).toStrictEqual(false)
})
