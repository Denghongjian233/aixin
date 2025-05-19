function longestIncreasingSubsequence(arr) {
  if (arr.length === 0) return 0;
  const tails = []; // tails[i] 表示长度为 i+1 的 LIS 的最小末尾元素

  for (const num of arr) {
    let left = 0,
      right = tails.length;
    // 二分查找第一个大于等于 num 的位置
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    // 如果找不到比 num 大的元素，说明可以扩展 tails 数组
    if (left === tails.length) {
      tails.push(num);
    } else {
      // 否则替换第一个大于等于 num 的元素，保持 tails 数组的最小值特性
      tails[left] = num;
    }
  }

  return tails.length; // tails 数组的长度即为 LIS 的长度
}

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])); // 输出 4
