/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const total = nums1.length + nums2.length;
    let left, right;
    const tempList = [];
    if (total % 2 === 0) {
        left = Math.floor(total / 2) - 1;
        right = Math.floor((total / 2));
    } else {
        left = Math.floor(total / 2);
        right = Math.floor(total / 2);
    }

    let nums1Count = 0, nums2Count = 0;
    for (let count = 0; count <= right; count++) {
        if (nums1.length === 0 || nums1Count === nums1.length) {
            tempList.push(nums2[nums2Count]);
            nums2Count++;
        } else if (nums2.length === 0 || nums2Count === nums2.length) {
            tempList.push(nums1[nums1Count]);
            nums1Count++;
        } else {
            if (nums1[nums1Count] > nums2[nums2Count]) {
                tempList.push(nums2[nums2Count]);
                nums2Count++;
            } else {
                tempList.push(nums1[nums1Count]);
                nums1Count++;
            }
        }
        if (count === right) return (tempList[left] + tempList[right]) / 2;
    }
};
// @lc code=end