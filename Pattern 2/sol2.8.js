// Longest Subarray with Ones after Replacement (hard)
// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
// Example 2:

// Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
// Output: 9
// Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

function LongestSubarrayOfOnes(arr, k) {
 let windowStart = 0, maxLength = 0, countOfZero = 0;
 for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
  const rightNum = arr[windowEnd];
  if (rightNum == 0) countOfZero++;
  while (countOfZero > k) {
   const leftNum = arr[windowStart];
   if (leftNum == 0) countOfZero--;
   windowStart++;
  }
  maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
 }
 return maxLength
}

function main() {
 console.log(LongestSubarrayOfOnes([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
 console.log(LongestSubarrayOfOnes([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));
}

main();
