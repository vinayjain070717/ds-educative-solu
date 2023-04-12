//Input: [2, 1, 5, 1, 3, 2], k=3 
//Output: 9
//Explanation: Subarray with maximum sum is [5, 1, 3].


//Brute Force method
function calculateMaxSumOfSubArrayMethod1(arr, k) {
 let maxSum = 0;
 for (let i = 0; i < arr.length - k + 1; i++) {
  let sum = 0;
  for (let j = i; j < i + k; j++) {
   sum += arr[j];
  }
  maxSum = Math.max(maxSum, sum)
 }
 return maxSum;
}

function calculateMaxSumOfSubArrayMethod2(arr, k) {
 let windowStart = 0;
 let windowSum = 0;
 let maxSum = 0;
 for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
  windowSum += arr[windowEnd];
  if (windowEnd >= k - 1) {
   maxSum = Math.max(maxSum, windowSum);
   windowSum -= arr[windowStart];
   windowStart++
  }
 }
 return maxSum;
}


function main() {
 const arr = [2, 1, 5, 1, 3, 2];
 const k = 3;
 console.log(calculateMaxSumOfSubArrayMethod2(arr, k));
}
main();


