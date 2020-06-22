/*
 * @Author: yushijun
 * @Date: 2020-05-27 16:49:06
 * @LastEditors: yushijun
 * @LastEditTime: 2020-05-27 17:19:01
 */
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
// var twoSum = function (nums, target) {
//   let result = []
//   for (let i = 0; i < nums.length; i++) {
//     if (result.length > 0) break
//     for (let j = i+1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         result = [i, j]
//         break
//       }
//     }
//   }
//   return result
// };
var twoSum = function(nums, target) {
  let map = {};//key数字 value下标
  let loop = 0;//循环次数
  let dis;//目标与当前值的差
  while(loop < nums.length){
      dis = target - nums[loop];
      if(map[dis] != undefined){
          return [map[dis], loop];
      }
      map[nums[loop]] = loop;
      loop++;
  }
  return;
};
