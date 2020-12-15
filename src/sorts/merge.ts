const sort = (array: Array<number>) => {
  return array.sort((a, b) => a - b);
};

type Merge = (array: Array<number>, start: number, middle: number, end: number) => Array<number>;

const merge: Merge = (array, start, middle, end) => {
  return [];
};

export { sort, merge };

export default sort;
