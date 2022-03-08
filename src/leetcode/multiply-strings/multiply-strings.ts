export function multiply(num1: string, num2: string): string {
  const length1 = num1.length,
    length2 = num2.length
  const result = new Array(length1 + length2).fill(0)
  for (let i = length1 - 1; i >= 0; i--) {
    for (let j = length2 - 1; j >= 0; j--) {
      const index = i + j + 1
      const factor1 = parseInt(num1[i])
      const factor2 = parseInt(num2[j])
      result[index] = factor1 * factor2 + result[index]
    }
  }

  let exceed = 0
  for (let i = result.length - 1; i > 0; i--) {
    const num = result[i] + exceed
    result[i] = num % 10
    exceed = Math.floor(num / 10)
  }
  result[0] = result[0] + exceed
  return result.join('').toString().replace(/^0+/, '')
}
