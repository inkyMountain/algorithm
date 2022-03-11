export function getFolderNames(names: string[]): string[] {
  const map: Record<string, number> = {}
  const result = names.map((name, index) => {
    const usedTimes = map[name]
    if (usedTimes === undefined) {
      map[name] = 1
      return name
    }
    while (map[`${name}(${map[name]})`] !== undefined) {
      map[name]++
    }
    const newName = `${name}(${map[name]})`
    map[newName] = 1
    return newName
  })
  return result
}
