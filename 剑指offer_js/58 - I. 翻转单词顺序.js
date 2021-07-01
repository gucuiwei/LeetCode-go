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

 let test = "the sky is blue"
 var reverseWords = function(s) {
    let words = []
    let word = ''
    for(let i= 0;i<s.length;i++) {
        word = word + s[i]
        if(s[i] === ' ') {
            words.unshift(word)
            word = ''
        }
    }
    return words
};
console.log(reverseWords(test))