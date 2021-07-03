/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    let oddArrayList = [] //奇数
    let evenArrayList = [] //偶数
    for(let i = 0;i<nums.length;i++){
        if(nums[i]%2 === 1) {
           oddArrayList.push(nums[i])
        } else {
           evenArrayList.push(nums[i])
        }
    }
    return oddArrayList.concat(evenArrayList)
};