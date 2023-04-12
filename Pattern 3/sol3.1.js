// Pair with Target Sum (easy)
// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6


function getPairWithTargetSum(arr, target) {
 let p1 = 0;
 let p2 = arr.length - 1;
 while (p2 > p1) {
  let pointerSum = arr[p1] + arr[p2]
  if (pointerSum == target) return [p1, p2]
  if (pointerSum > target) p2--;
  else p1++;
 }
 return [-1, -1];
}


function main() {
 console.log(getPairWithTargetSum([1, 2, 3, 4, 6], 6));
}


main();
