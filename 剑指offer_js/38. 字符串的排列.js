// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
/**
 * @param {string} s
 * @return {string[]}
 */
 let test = "abc"
 var permutation = function(s) {
     let len = s.length
     let result = []
    //  for(let i =len;i>=0;i--) {
    //     // result.push([s[s.length-i-1]])
    //      for(let j = 0;j<s.length;j++) {
    //         //  if(s[i] === s[j]) {
    //         //      continue
    //         //  }
    //         console.log(s[i],s[j])
    //         // console.log(result[i],s[j])
    //      }
    //  }
    for(let i =0;i<s.length;i++) {
        result.push([s[i]])
        for(let j = 0;j<s.length;j++) {
            if(s[i] === s[j]) {
                continue
            }
            result[i].push(s[j])
        }
        
    }
     console.log(result)
    //  result.push(s[s.length-i])
};
console.log(permutation(test))