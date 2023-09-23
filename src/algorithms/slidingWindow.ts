function lengthOfLongestSubstring(s: string): number {
  let set = new Set(); // create an empty Set to keep track of characters in the current window
  let left = 0; // initialize the left pointer of the sliding window
  let maxSize = 0; // initialize the maximum size of the longest substring without repeating characters

  // edge cases: empty string or single character string
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  // loop through the string with a right pointer
  for (let i = 0; i < s.length; i++) {
    // if the character at the current right pointer is already in the set, move the left pointer and delete characters from the set until the character is removed from the set
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    // add the current character to the set
    set.add(s[i]);
    // update the maximum size if the current window is bigger
    maxSize = Math.max(maxSize, i - left + 1);
  }
  // return the maximum size
  return maxSize;
}

console.log(lengthOfLongestSubstring("pwwkew"));
