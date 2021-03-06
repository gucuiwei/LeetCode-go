// 输入: "the sky is blue"
// 输出: "blue is sky the"

// 输入: "  hello world!  "
// 输出: "world! hello"
// 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

// 输入: "a good   example"
// 输出: "example good a"
// 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

/**
 * @param {string} s
 * @return {string}
 */

 let test = "  hello world!  "
 // filter 过滤调其中所有为空的情况
 var reverseWords = function(s) {
    if(!s){return ''}
    let array = s.split(' ').reverse().filter(i=>i).join(' ')
    return array
};