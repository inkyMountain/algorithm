function removeComments(source: string[]): string[] {
  let sourceString = source.join('\n')
  let index = 0
  while (index < sourceString.length) {
    // 如果是 // 注释
    if (sourceString[index] === '/' && sourceString[index + 1] === '/') {
      let j = index + 2
      while (j < sourceString.length && sourceString[j] !== '\n') {
        j++
      }
      sourceString =
      sourceString.substring(0, index) + sourceString.substring(j)
    } 
    // 如果是 /**/ 注释
    else if (sourceString[index] === '/' && sourceString[index + 1] === '*') {
      let j = index + 1
      while (
        j < sourceString.length &&
        !(
          sourceString[j - 2] === '*' &&
          sourceString[j - 1] === '/' &&
          // 避免这种情况 /*/
          j - index > 3
        )
      ) {
        j++
      }
      sourceString =
        sourceString.substring(0, index) + sourceString.substring(j)
    } else {
      index++
    }
  }
  const result = sourceString.split('\n').filter(Boolean)
  return result
}
