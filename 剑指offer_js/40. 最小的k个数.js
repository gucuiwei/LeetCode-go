/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

 var getLeastNumbers = function(array, k) {
    let len = array.length;
    if(k > len) {
        return false;
    }
    let arr = array.slice(0, k),
        maxIndex = findMaxIndex(arr),
        max = arr[maxIndex];
    for(let i=k; i<len; ++i) {
        if(array[i] < max) {
            arr[maxIndex] = array[i];
            maxIndex = findMaxIndex(arr);
            max = arr[maxIndex];
            
        }
    }
    return arr.sort((a, b) => a - b);
}

function findMaxIndex(arr) {
    let max = arr[0],
        index = 0;
    for(let i=1,len=arr.length; i<len; ++i) {
        if(max < arr[i]) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}