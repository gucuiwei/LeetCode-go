/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if(!nums.length) return 0
    let m = 0
    for(let i= 0;i<nums.length;i++) {
        if(nums[i] === target) {
            m++
        }
    }
    return m
};