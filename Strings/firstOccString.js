let haystack = "sadbutsad";
let needle = "sad";
let strStr = (haystack, needle) => {
  let sliceStart = 0;
  let sliceEnd = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    let slice = haystack.substring(sliceStart, sliceEnd);
    if (slice == needle) {
      return i;
    } else {
      sliceStart++;
      sliceEnd++;
    }
  }
  return -1;
};
console.log(strStr(haystack, needle));
