/*
 * @Author: yushijun
 * @Date: 2020-06-22 14:54:57
 * @LastEditors: yushijun
 * @LastEditTime: 2020-06-22 17:28:51
 */
// 示例 1:

// 输入: "42"
// 输出: 42
// 示例 2:

// 输入: "   -42"
// 输出: -42
// 解释: 第一个非空白字符为 '-', 它是一个负号。
//      我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
// 示例 3:

// 输入: "4193 with words"
// 输出: 4193
// 解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
// 示例 4:

// 输入: "words and 987"
// 输出: 0
// 解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
//      因此无法执行有效的转换。
// 示例 5:

// 输入: "-91283472332"
// 输出: -2147483648
// 解释: 数字 "-91283472332" 超过 32 位有符号整数范围。
//      因此返回 INT_MIN (−231) 。
// 第一种parseInt

// var myAtoi = function(str) {
//   const number = parseInt(str, 10);

//   if(isNaN(number)) {
//       return 0;
//   } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
//       return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
//   } else {
//       return number;
//   }
// };

// 第二种
var myAtoi = function (x) {
  if (x === '-') {
    return 0
  }
  if (x === '+') {
    return 0
  }
  x = x.replace(/(^\s*)|(\s*$)/g, '')
  let str = ''
  if (!Number.isNaN(Number(x)) && !x.includes('e')) {
    if (Number(x) > 0 && Math.abs(Number(x)) > Math.pow(2, 31)) {
      return Math.pow(2, 31) - 1
    } else if (Number(x) < 0 && Math.abs(Number(x)) > Math.pow(2, 31)) {
      return - Math.pow(2, 31)
    }
  }
  for (let i = 0; i < x.length; i++) {
    if (i == 0 && x[i] !== '-' && x[i] !== '+' && Number.isNaN(Number(x[i]))) {
      str = 0
      break
    } else if (i == 0 && (x[i] === '-' || x[i] === '+')) {
      if (x[i] === '-') {
        str = str + x[i]
      }
    } else if (x[i] === ' ') {
      break
    } else if (!Number.isNaN(Number(x[i]))) {
      str = str + x[i]
    } else if (Number.isNaN(Number(x[i]))) {
      break
    }
  }
  if (Number.isNaN(Number(str))) {
    return 0
  } else if (Number(str) > 0 && Math.abs(Number(str)) >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1
  } else if (Number(str) < 0 && Math.abs(Number(str)) >= Math.pow(2, 31)) {
    return - Math.pow(2, 31)
  } else {
    return Number(str)
  }
}