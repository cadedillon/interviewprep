/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let s_lower = s.toLowerCase();
  let s_norm = s_lower
    .split(" ")
    .join("")
    .split(/[^a-z0-9]/g)
    .join("");

  let j = s_norm.length - 1;
  for (let i = 0; i < s_norm.length; i++) {
    if (i > s_norm.length / 2) {
      break;
    } else if (s_norm.charAt(i) !== s_norm.charAt(j)) {
      return false;
    }

    j--;
  }

  return true;
};

s = "A man, a plan, a canal: Panama";
t = "racecar";

console.log(isPalindrome(s));
console.log(isPalindrome(t));
