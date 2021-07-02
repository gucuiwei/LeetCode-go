// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab

// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 let test = "lrloseumgh"
 var reverseLeftWords = function(s, n) {
     let temp =''
     let word = s.split('')
     for(let i = 0;i<word.length;i++) {
         word.push(word[i])
         if (i+1 === n) {
             word = word.slice(n).join('')
             return word
         }
     }
};
console.log(reverseLeftWords(test,6))