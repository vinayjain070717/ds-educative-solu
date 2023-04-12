// Remove Duplicates (easy)
// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

function removeDuplicates(arr) {
 let nextNonDuplicate = 1;
 let next = 1;
 while (next < arr.length) {
  if (arr[nextNonDuplicate - 1] != arr[next]) {
   arr[nextNonDuplicate] = arr[next];
   nextNonDuplicate++;
  }
  next++;
 }
 return nextNonDuplicate
}

function main() {
 console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]))
 console.log(removeDuplicates([2, 2, 2, 2, 11]));
}

main()

