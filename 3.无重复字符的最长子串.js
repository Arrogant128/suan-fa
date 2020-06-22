/*
 * @Author: yushijun
 * @Date: 2020-05-29 14:48:01
 * @LastEditors: yushijun
 * @LastEditTime: 2020-05-29 16:00:09
 */
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
function getMaxNum (str) {
  str = str.split('')
  let list = []
  let max = 0
  str.forEach(element => {
    let index = list.findIndex((item) => item === element)
    if (index > -1) {
      list.splice(0, index + 1)
    }
    list.push(element)
  })
  max = Math.max(max, list.length)
  return max
}