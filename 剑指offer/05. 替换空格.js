// 输入：s = "We are happy."
// 输出："We%20are%20happy."
let test = 'We are happy.'
/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
     let insertS = '' 
     for(let i = 0;i<s.length;i++) {
         if(s[i] === ' ') {
            insertS = insertS + '%20'
         } else {
            insertS = insertS + s[i]
         }
     }
     return insertS
};
console.log(replaceSpace(test))