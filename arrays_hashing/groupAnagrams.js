/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let rsltStrs = [];
  for (let i = 0; i < strs.length; i++) {
    let temp = strs[i].split("").sort().join("");
  }
};

const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const input2 = [""];
const input3 = ["a"];

console.log(
  groupAnagrams(input1) == [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
);

console.log(groupAnagrams(input2) == [[""]]);
console.log(groupAnagrams(input3) == [["a"]]);
