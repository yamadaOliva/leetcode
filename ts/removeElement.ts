function removeElement(nums: number[], val: number): number {
  let i: number = 0;
  for (let j: number = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
console.log(removeElement([3, 2, 2, 3], 3)); 