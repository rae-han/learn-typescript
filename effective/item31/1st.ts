function extent(nums: number[]) {
  let min, max;

  for (const num of nums) {
    if (!min) {
      min = num;
      max = num;
    } else {
      min = Math.min(min, num);
      max = Math.max(max, num);
    }
  }

  return [min, max];
}

extent([1, 2, 6, 7, 8, 9]);

export {};
