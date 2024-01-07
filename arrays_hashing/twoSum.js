/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [nums[i], nums[j]];
      }
    }
  }
};

nums1 = [2, 7, 11, 15];
nums2 = [3, 2, 4];
nums3 = [3, 3];

target1 = 9;
target2 = 6;
target3 = 6;

console.log(twoSum(nums1, target1)[0] + twoSum(nums1, target1)[1] == target1);
console.log(twoSum(nums2, target2)[0] + twoSum(nums2, target2)[1] == target2);
console.log(twoSum(nums3, target3)[0] + twoSum(nums3, target3)[1] == target3);
