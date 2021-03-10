/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let s = S.split('')
    for(let i = 0;i<s.length-1;i++) {
        if(s[i] === s[i+1]) {
            // 删除相邻的两个元素
            s.splice(i,1)
            s.splice(i,1)
            s = s.join('')
            if(!s.length || s.length === 1) return s
            return removeDuplicates(s)
        }
        if(i === s.length-2) {
            return s.join('')
        }
    }
};