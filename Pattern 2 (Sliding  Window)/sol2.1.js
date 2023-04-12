//Find the average of all contigious subarray of size k
//Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
//Output: [2.2, 2.8, 2.4, 3.6, 2.8]

function findAllContigiousSubArrayMethod2(arr, k) {
 let windowSum = 0;
 let windowStart = 0;
 let result = [];
 for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
  windowSum += arr[windowEnd];
  if (windowEnd >= k - 1) {
   result.push(windowSum / k);
   windowSum -= arr[windowStart];
   windowStart++;
  }
 }
 return result;
}


function main() {
 const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
 const k = 5;
 console.log(findAllContigiousSubArrayMethod2(arr, k));
}
main();