/*
 * @Author: yushijun
 * @Date: 2020-06-22 13:53:25
 * @LastEditors: yushijun
 * @LastEditTime: 2020-06-22 14:38:38
 */
// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// function reserve(num) {
//   let arr = String(num).split('')
//   let str = ''
//   if (arr.length === 1) {
//     return num
//   }
//   if (arr[0] === '-') {
//     arr.shift()
//     str = '-' + arr.reserve().join('')
//   } else if (arr[arr.length - 1] === '0') {
//     arr = arr.reserve()
//     arr.shift()
//     str = arr.join('')
//   } else {
//     str = arr.reserve().join('')
//   }
//   return Number(str)
// }
var reverse = function (x) {
  let now = Math.abs(x).toString().split("").reverse().join("");
  if (x < 0) {
    return now <= Math.pow(2, 31) ? -now : 0;
  } else {
    return now < Math.pow(2, 31) ? now : 0;
  }
}