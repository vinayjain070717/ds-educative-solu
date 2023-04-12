// Fruits into Baskets (medium)
// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
function fruitsAndBaskets(arr) {
 let windowStart = 0;
 let maxLength = 0;
 let fruitFrequency = {};
 for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
  const rightFruit = arr[windowEnd];
  if (!(rightFruit in fruitFrequency)) {
   fruitFrequency[rightFruit] = 0;
  }
  fruitFrequency[rightFruit] += 1;

  while (Object.keys(fruitFrequency).length > 2) {
   const leftFruit = arr[windowStart];
   fruitFrequency[leftFruit] -= 1;
   if (fruitFrequency[leftFruit] === 0) delete fruitFrequency[leftFruit]
   windowStart++;
  }
  maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
 }
 return maxLength
}

function main() {
 console.log(fruitsAndBaskets(['A', 'B', 'C', 'A', 'C']));
 console.log(fruitsAndBaskets(['A', 'B', 'C', 'B', 'B', 'C']))
}


main();
