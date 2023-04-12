// Given a string, find the length of the longest substring which has no repeating characters.

// Example 1:

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".
// Example 2:

// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring without any repeating characters is "ab".
// Example 3:

// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings without any repeating characters are "abc" & "cde".

function LongestStringWithNoRepeatingChar(str) {
 let windowStart = 0;
 let maxLength = 0;
 let strFrequency = {}
 for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
  let rightChar = str[windowEnd];
  if (rightChar in strFrequency) {
   windowStart = Math.max(windowStart, strFrequency[rightChar] + 1);
  }
  strFrequency[rightChar] = windowEnd;
  maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
 }
 return maxLength;
}


// function LongestStringWithNoRepeatingChar(str) {
//  let windowStart = 0;
//  let maxLength = 0;
//  let strFrequency = {};
//  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//   const leftChar = str[windowEnd];
//   if (!(leftChar in strFrequency)) {
//    strFrequency[leftChar] = 0;
//   }
//   strFrequency[leftChar] += 1;
//   while (Object.values(strFrequency).includes(2)) {
//    const rightChar = str[windowStart];
//    strFrequency[rightChar] -= 1;
//    if (strFrequency[rightChar] == 0) delete strFrequency[rightChar];
//    windowStart++;
//   }
//   maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//  }
//  return maxLength;
// }



function main() {
 console.log(LongestStringWithNoRepeatingChar("abccde"))
 console.log(LongestStringWithNoRepeatingChar("abbbb"))
 console.log(LongestStringWithNoRepeatingChar("aabccbb"))
}

main();