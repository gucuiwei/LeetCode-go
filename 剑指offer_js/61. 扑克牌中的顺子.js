/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function(nums) {
    let result = 0
    nums.sort((a,b)=> a-b)
    for(let i =0; i<nums.length-1; i++) {
        if(nums[i] === nums[i+1] && nums[i] !=0 && nums[i+1] != 0) return false
        if(nums[i] === 0) {
            continue
        }
        result = result + (nums[i+1] - nums[i]) 
    }
    if(result === nums.length-1 || result === 2 || result === 3) {
        return true
    }
    return false
};