/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let list = []
    if(nums == null || nums.length == 0){
        return list;
    }
    let left = 0, right = nums.length - 1;
    while(left < right){
        let total = nums[left] + nums[right];
        if(total == target){
            list.push(nums[left]);
            list.push(nums[right]);
            return list;
        }else if(total > target){
            right--;
        }else {
            left++;
        }
    }
    return list;
};
