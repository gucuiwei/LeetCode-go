/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumbers = function(nums) {
    let res = []
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(nums[i] === nums[i+1]) {
            i=i+1
            continue
        }
        res.push(nums[i])
    }
    return res
};