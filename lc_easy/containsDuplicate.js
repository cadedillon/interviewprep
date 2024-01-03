/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numMap = new Map();

  for (const elt of nums) {
    if (numMap.has(elt)) {
      return true;
    } else {
      numMap.set(elt, 1);
    }
  }

  return false;
};

nums1 = [1, 2, 3, 1];
nums2 = [1, 2, 3, 4];
nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log("Test 1 : " + containsDuplicate(nums1));
console.log("Test 2 : " + containsDuplicate(nums2));
console.log("Test 3 : " + containsDuplicate(nums3));
