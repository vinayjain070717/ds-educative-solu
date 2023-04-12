// Permutation in a String (hard) #

// Example 1:

// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.



function isPermutationOfStringPresent(str, pattern) {
 let windowStart = 0;
 let charFrequency = {};
 let matched = 0;
 for (let i = 0; i < pattern.length; i++) {
  if (!(pattern[i] in charFrequency)) {
   charFrequency[pattern[i]] = 0;
  }
  charFrequency[pattern[i]] += 1;
 }

 for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
  const rightChar = str[windowEnd];
  if (rightChar in charFrequency) {
   charFrequency[rightChar] -= 1
   if (charFrequency[rightChar] === 0) {
    matched += 1;
   }
  }

  if (matched === Object.keys(charFrequency).length) {
   return true;
  }

  if (windowEnd >= pattern.length - 1) {
   leftChar = str[windowStart];
   windowStart += 1;
   if (leftChar in charFrequency) {
    if (charFrequency[leftChar] === 0) {
     matched -= 1;
    }
    charFrequency[leftChar] += 1;
   }
  }
 }
 return false;
}



function main() {
 console.log(isPermutationOfStringPresent("oidbcaf", "abc"));
}

main();
