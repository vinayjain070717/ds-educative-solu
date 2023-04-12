//Input: [2, 1, 5, 1, 3, 2], S=7 
//Output: 2
//Explanation: Subarray with min sum is [5, 2].


function calculateMinSumOfSubArrayMethod2(arr, S) {
 let windowStart = 0;
 let minLength = Infinity;
 let windowSum = 0;
 for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
  windowSum += arr[windowEnd];
  while (windowSum >= S) {
   minLength = Math.min(minLength, windowEnd - windowStart + 1);
   windowSum -= arr[windowStart];
   windowStart++;
  }

 }
 if (minLength === Infinity) return 0;
 return minLength;
}


function main() {
 const arr = [2, 1, 5, 2, 3, 2];
 const k = 7;
 console.log(calculateMinSumOfSubArrayMethod2(arr, k));
 console.log(calculateMinSumOfSubArrayMethod2([2, 1, 5, 2, 8], 7))
 console.log(calculateMinSumOfSubArrayMethod2([3, 4, 1, 1, 6], 8))
}
main();


