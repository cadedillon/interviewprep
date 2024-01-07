/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sSorted = s.split("").sort().join("");
  const tSorted = t.split("").sort().join("");

  if (s.length != t.length) {
    return false;
  }

  if (sSorted !== tSorted) {
    return false;
  }

  return true;
};

let s = "anagram";
let t = "nagaram";

let a = "rat";
let b = "car";

console.log(isAnagram(s, t));
console.log(isAnagram(a, b));
