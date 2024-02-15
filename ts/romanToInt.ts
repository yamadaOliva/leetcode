function romanToInt(s: string): number {
  let romanToIntMap: Map<string, number> = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let result: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    let current: number = romanToIntMap.get(s[i]) || 0;
    let next: number = romanToIntMap.get(s[i + 1]) || 0;
    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
}
