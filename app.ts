function strStr(haystack: string, needle: string): number {
  if (needle.length > haystack.length || !haystack.includes(needle) || !haystack || !needle) return -1;
  for (let index = 0; index < haystack.length; index++) {
    const start: number = index;
    const end: number = index + needle.length
    if (end > haystack.length) return -1;
    if (haystack.substring(start, end) === needle) return start
  }
  return -1;
};

console.log(strStr("sabutsad", "sad"))