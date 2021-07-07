// 采用回朔法实现
// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
/**
 * @param {string} s
 * @return {string[]}
 */
 let test = "abc"
 var permutation = function(s) {
    const rec = [], vis = [];
    const n = s.length;
    const arr = Array.from(s).sort();
    const perm = [];
    const backtrack = (arr, i, n, perm) => {
        if (i === n) {
            rec.push(perm.toString());
            return;
        }
        for (let j = 0; j < n; j++) {
            if (vis[j] || (j > 0 && !vis[j - 1] && arr[j - 1] === arr[j])) {
                continue;
            }
            vis[j] = true;
            perm.push(arr[j]);
            backtrack(arr, i + 1, n, perm);
            perm.pop();
            vis[j] = false;
        }
    }

    backtrack(arr, 0, n, perm);
    const size = rec.length;
    const recArr = new Array(size).fill(0);
    for (let i = 0; i < size; i++) {
        recArr[i] = rec[i].split(',').join('');
    }
    return recArr;
};
console.log(permutation(test))

// 奇怪的实现方式
let test = "abc"
 var permutation = function(str) {
    var result=[];
    if(str.length==1){
        return [str]
    }else{
        var preResult= permutation(str.slice(1));
        for (var j = 0; j < preResult.length; j++) {
            for (var k = 0; k < preResult[j].length+1; k++) {
                var temp=preResult[j].slice(0,k)+str[0]+preResult[j].slice(k);
                result.push(temp);
            }
        }
        return result;
    }
};
console.log(permutation(test))