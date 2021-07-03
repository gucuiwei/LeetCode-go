/**
 * @param {number[]} nums
 * @return {number}
 */
// 首先进行排序，判断是否前一个与后一个是否相等，对数据做预处理
let test = [3,4,3,3]
var singleNumber = function(nums) {
    let res = 0
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(nums[i] === nums[i+1]) {
            i=i+2
            continue
        }
        res = nums[i]
    }
    return res
};
console.log(singleNumber(test))