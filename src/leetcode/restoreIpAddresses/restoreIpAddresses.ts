// https://leetcode-cn.com/problems/restore-ip-addresses/

export function restoreIpAddresses(s: string): string[] {
  const result = [];
  const fragments = [];
  const recurse = (startIndex: number) => {
    if (startIndex === s.length && fragments.length === 4) {
      result.push(fragments.join('.'));
      return;
    }
    if (startIndex > s.length) {
      return;
    }
    for (let i = startIndex; i < startIndex + 3 && i < 12; i++) {
      const fragmentString = s.substring(startIndex, i + 1);
      const fragment = parseInt(fragmentString);
      if (
        fragment > 255 ||
        fragment.toString().length !== fragmentString.length
      ) {
        continue;
      }

      fragments.push(fragment);
      recurse(i + 1);
      fragments.pop();
    }
  };
  recurse(0);
  return result;
}
