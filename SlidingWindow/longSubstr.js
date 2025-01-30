/*
Given a string s, find the length of the longest substring without duplicate characters.
A substring is a contiguous sequence of characters within a string.
*/

const s = "zxyzxyz";

const lengthOfLongestSubstring = (s) => {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let charSet = new Set();
    for (j = i; j < s.length; j++) {
      if (charSet.has(s[j])) {
        break;
      }
      charSet.add(s[j]);
    }
    res = Math.max(res, charSet.size);
  }
  return res;
};

const result = lengthOfLongestSubstring(s);
console.log(result);
