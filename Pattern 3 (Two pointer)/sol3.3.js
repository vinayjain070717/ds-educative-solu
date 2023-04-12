// Squaring a Sorted Array (easy)
// Example 1:

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]
// Example 2:

// Input: [-3, -1, 0, 1, 2]
// Output: [0 1 1 4 9]



function SquaringTheSortedArray(arr) {
 let n = arr.length;
 let highestSquareIndex = n - 1;
 let sqaures = Array(n).fill(0);
 let leftPointer = 0;
 let rightPointer = n - 1;

 while (leftPointer < rightPointer) {
  let leftSquare = Math.pow(arr[leftPointer], 2);
  let rightSquare = Math.pow(arr[rightPointer], 2)
  if (leftSquare > rightSquare) {
   sqaures[highestSquareIndex] = leftSquare;
   leftPointer++;
  }
  else {
   sqaures[highestSquareIndex] = rightSquare;
   rightPointer--;
  }
  highestSquareIndex--;
 }
 return sqaures
}


function main() {
 console.log(SquaringTheSortedArray([-2, -1, 0, 1, 2]));
 console.log(SquaringTheSortedArray([-3, -1, 0, 1, 2]));
}

main();

