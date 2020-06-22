/*
 * @Author: yushijun
 * @Date: 2020-06-01 10:09:01
 * @LastEditors: yushijun
 * @LastEditTime: 2020-06-01 10:09:51
 */ 
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"
// 解法一：暴力枚举法

function isPalindrome(str) {
    var len  = str.length
    var middle = parseInt(len/2)
    for(var i = 0;i<middle;i++){
        if(str[i]!=str[len-i-1]){
            return false
        }
    }
    return true
}
var ans = '';
var max = 0;
var len = s.length
for(var i = 0;i<len;i++){
    for(var r = i+1;r<=len;r++){
        var tmpStr = s.substring(i,r)
        if(isPalindrome(tmpStr) && tmpStr.length > max){
            ans = s.substring(i,r)
            max = tmpStr.length;
        }
    }
}
return ans;
