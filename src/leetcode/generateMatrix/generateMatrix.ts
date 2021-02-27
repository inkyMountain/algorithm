export function generateMatrix(n: number): number[][] {
  const result = [];
  // 首先根据 n 的大小生成二维数组
  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < n; j++) {
      result[i].push(Infinity);
    }
  }

  const directions = ['right', 'down', 'left', 'up'];
  let directionIndex = 0;
  // 当前填充的坐标
  const coords = [0, 0];

  for (let j = 0; j < n * n; j++) {
    const [x, y] = coords;
    // 填充数字
    result[y][x] = j + 1;

    // 接下来需要找出下一次填充的坐标。
    // 首先需要确定方向是否需要改变。
    let direction = directions[directionIndex];
    // 下一个位置不等于 Infinity，说明需要变换方向。
    // 如果是一个不等于 Infinity 的数字，说明这个位置已经被填充。
    // 如果是 undefined，说明超出了二维数组的边界。
    if (direction === 'right' && result[y]?.[x + 1] !== Infinity) {
      directionIndex = directionIndex === 3 ? 0 : directionIndex + 1;
    }

    if (direction === 'down' && result[y + 1]?.[x] !== Infinity) {
      directionIndex = directionIndex === 3 ? 0 : directionIndex + 1;
    }

    if (direction === 'left' && result[y]?.[x - 1] !== Infinity) {
      directionIndex = directionIndex === 3 ? 0 : directionIndex + 1;
    }

    if (direction === 'up' && result[y - 1]?.[x] !== Infinity) {
      directionIndex = directionIndex === 3 ? 0 : directionIndex + 1;
    }

    // 由于这时候方向可能已经变了，需要重新计算一次方向。
    direction = directions[directionIndex];

    // 根据方向确定下一次填充的坐标点。
    if (direction === 'right') {
      coords[0]++;
    }
    if (direction === 'down') {
      coords[1]++;
    }
    if (direction === 'left') {
      coords[0]--;
    }
    if (direction === 'up') {
      coords[1]--;
    }
  }
  return result;
}
