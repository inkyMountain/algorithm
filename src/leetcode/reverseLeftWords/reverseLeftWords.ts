// https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

// export function reverseLeftWords(s: string, n: number): string {
//   let result = '';
//   for (let i = 0; i < s.length; i++) {
//     const index = i < s.length - n ? i + n : i - s.length + n;
//     const char = s.charAt(index);
//     result += char;
//   }
//   return result;
// }

export function reverseLeftWords(s: string, n: number): string {
  let result = '';
  for (let i = n; i < s.length; i++) {
    result += s[i]
  }
  for (let i = 0; i < n; i++) {
    result += s[i]
  }
  return result;
}
