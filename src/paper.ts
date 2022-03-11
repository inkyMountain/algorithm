/*
 * @lc app=leetcode.cn id=1487 lang=typescript
 *
 * [1487] 保证文件名唯一
 */

/**
 * 
 * 给你一个长度为 n 的字符串数组 names 。你将会在文件系统中创建 n 个文件夹：在第 i 分钟，新建名为 names[i] 的文件夹。
由于两个文件 不能 共享相同的文件名，因此如果新建文件夹使用的文件名已经被占用，
系统会以 (k) 的形式为新文件夹的文件名添加后缀，其中 k 是能保证文件名唯一的 最小正整数 。
返回长度为 n 的字符串数组，其中 ans[i] 是创建第 i 个文件夹时系统分配给该文件夹的实际名称。
 */

// @lc code=start
function getFolderNames(names: string[]): string[] {
  const map: Record<string, Set<number>> = {}
  const regex = /\((\d+)\)$/
  /**
   * xxx
   * Wrong Answer
11/33 cases passed (N/A)
Testcase
["kaido","kaido(1)","kaido","kaido(1)"]
Answer
["kaido","kaido(1)","kaido(2)","kaido(3)"]
Expected Answer
["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]
Stdout
[ 'kaido', 'kaido(1)', 'kaido(2)', 'kaido(3)' ]
   */
  const result = names.map((name, index) => {
    const matchResult = name.match(regex)
    const n = name.substring(
      0,
      matchResult ? matchResult.index : name.length
    )
    const numStr = matchResult ? matchResult[1] : '0'
    let num = parseInt(numStr)
    map[n] = map[n] || new Set()
    const set = map[n]
    while (set.has(num)) {
      num++
    }
    set.add(num)
    return num === 0 ? name : `${n}(${num})`
  })
  return result
}
// @lc code=end

getFolderNames(['xxx', 'xxx(2)', 'xxx'])
