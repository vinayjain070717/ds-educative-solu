// Triplet Sum to Zero (medium)
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// Example 1:

// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// Explanation: There are four unique triplets whose sum is equal to zero.
// Example 2:

// Input: [-5, 2, -1, -2, 3]
// Output: [[-5, 2, 3], [-2, -1, 3]]
// Explanation: There are two unique triplets whose sum is equal to zero.

function searchPairOfTriplet(arr) {
 arr.sort((a, b) => a - b);
 let triplets = [];
 for (let i = 0; i < arr.length; i++) {
  if (i > 0 && arr[i] == arr[i - 1]) continue;
  searchPair(arr, -arr[i], i + 1, triplets)
 }
 return triplets;
}

function searchPair(arr, targetSum, left, triplets) {
 let right = arr.length - 1;
 while (left < right) {
  let currentSum = arr[left] + arr[right];
  if (currentSum == targetSum) {
   triplets.push([-targetSum, arr[left], arr[right]]);
   left += 1;
   right -= 1
   while (left < right && arr[left] == arr[left + 1]) left++;
   while (left < right && arr[right] == arr[right - 1]) right--;
  }
  else if (currentSum < targetSum) {
   left++;
  }
  else right--
 }
}






function main() {
 console.log(searchPairOfTriplet([-3, 0, 1, 2, -1, 1, -2]));
 console.log(searchPairOfTriplet([-5, 2, -1, -2, 3]))
}

main();
