/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * 
 */

//  s = "abaccdeff"
//  返回 "b"
 
//  s = "" 
//  返回 " "
/**
 * @param {string} s
 * @return {character}
 */
 s = "abaccdeff"
 // 时间复杂度比较高
 var firstUniqChar = function(s) {
    for(let x of s){
        if(s.indexOf(x) === s.lastIndexOf(x)) return x
    }
    return ' '
};
console.log(firstUniqChar(s))