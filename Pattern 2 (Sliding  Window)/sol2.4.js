//Longest Substring with K Distinct Characters (medium)
//Input: String="araaci", K=2
//Output: 4

function LongestSubstrinWithKDistinctChar(str, k) {
 let windowStart = 0;
 let charFrequency = {};
 let maxLength = 0;
 for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
  const rightChar = str[windowEnd];
  if (!(rightChar in charFrequency)) {
   charFrequency[rightChar] = 0;
  }
  charFrequency[rightChar] += 1;
  while (Object.keys(charFrequency).length > k) {
   const leftChar = str[windowStart];
   charFrequency[leftChar] -= 1;

   if (charFrequency[leftChar] === 0) {
    delete charFrequency[leftChar];
   }
   windowStart += 1;
  }
  maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
 }
 return maxLength;
}

function main() {
 const str = "araaci";
 const k = 2;
 console.log(LongestSubstrinWithKDistinctChar("araaci", 2));
}

main();