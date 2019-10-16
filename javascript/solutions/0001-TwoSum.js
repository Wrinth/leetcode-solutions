/*
 * Given an array of integers, return indices of the two numbers
 *   such that they add up to a specific target.
 * You may assume that each input would have exactly one solution,
 *   and you may not use the same element twice.
 *
 * Example:
 *  Given nums = [2, 7, 11, 15], target = 9,
 *
 *  Because nums[0] + nums[1] = 2 + 7 = 9,
 *  return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  // Save the complement of each numbers to the target
  const complement = {}
  for (let num = 0; num < nums.length; num += 1) {
    if (Object.prototype.hasOwnProperty.call(complement, nums[num])) {
      // If complement found, return the position of that number and current position
      return [parseInt(complement[nums[num]]), parseInt(num)]
    }
    complement[target - nums[num]] = num
  }
  // In case nothing foung, just return an invalid array
  return [-1, -1]
}

let isEqual
isEqual = (JSON.stringify(twoSum([2, 7, 11, 15], 9).sort()) === JSON.stringify([0, 1].sort()))
console.log(`Solution 1 is ${isEqual}`)
isEqual = (JSON.stringify(twoSum([1, 2, 3, 5], 7).sort()) === JSON.stringify([1, 3].sort()))
console.log(`Solution 2 is ${isEqual}`)
