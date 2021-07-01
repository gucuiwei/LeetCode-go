/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let len = nums.length-1;
    if(len === nums[len]) return len+1;
    let left = 0;
    let right = len;
    while(left<=right){
        var mid = parseInt((left+right)/2);
        mid === nums[mid] ? left=mid+1 : right=mid-1;
    }
    return left;
};