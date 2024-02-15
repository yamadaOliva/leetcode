function isValid(s: string): boolean {
  let stack: string[] = [];
  let map: Map<string, string> = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  for (let i: number = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let top: string = stack.length === 0 ? "#" : stack.pop() || "";
      if (top !== map.get(s[i])) return false;
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}
