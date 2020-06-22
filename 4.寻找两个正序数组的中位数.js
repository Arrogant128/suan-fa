/*
 * @Author: yushijun
 * @Date: 2020-05-29 17:25:28
 * @LastEditors: yushijun
 * @LastEditTime: 2020-05-29 17:58:19
 */
// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

// 你可以假设 nums1 和 nums2 不会同时为空。

//  

// 示例 1:

// nums1 = [1, 3]
// nums2 = [2]

// 则中位数是 2.0
// 示例 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// 则中位数是 (2 + 3)/2 = 2.5
function findMedianSortedArrays(nums1,nums2) {
  let arr3 = nums1.concat(nums2)
  arr3 = arr3.sort((a,b) => a - b) // 这边考虑到负数的时候
  let index = arr3.length/2
  let num3
  if (index === 0.5) { // 这边考虑到[],[1]的时候
      return arr3[0]
  }
  if (String(index).indexOf('.') > -1) {
      num3 =  arr3[index - 0.5]
  } else {
     num3 = (arr3[index - 1] + arr3[index])/2
  }
  return num3
}