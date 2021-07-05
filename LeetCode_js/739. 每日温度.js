// 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// let test = [73, 74, 75, 71, 69, 72, 76, 73]

let test = [73,74,75,71,69,72,76,73]

// [55,38,53,81,61,93,97,32,43,78]
// let test = [55,38,53,81,61,93,97,32,43,78]

// [3,1,1,2,1,1,0,1,1,0]
 var dailyTemperatures = function(temperatures) {
    let result = []
    for(let i = 0; i <temperatures.length; i++) {
        let temp = temperatures[i]
        let len = 0
        for(let j= i+1;j<temperatures.length;j++) {
            if(temperatures[j]>temp) {
                ++len
                break
            }else if(j<temperatures.length-1){
                temp = temperatures[i]
                len++
            }else {
                len = 0
            }
        }
        result.push(len)
    }
    return result
};
console.log(dailyTemperatures(test))

// 采用栈实现
var dailyTemperatures = function(temperatures) {
    const stack = [0]
    let count = 1

    // 创建结果数组(默认将结果数组使用0进行填充)
    const len = temperatures.length
    const arr = new Array(len).fill(0)

    // 遍历
    for(let i = 0;i < len; i++) {
        let temp = temperatures[i]
        // 使用temp比较栈顶值，如果栈顶值小、出栈（计算日期差并存储），并重复操作
        // -stack[count-1] 代表栈顶值
        while(count && temp > temperatures[stack[count-1]]) {
            // 出栈
            let index = stack.pop()
            count--
            // 计算index 与 i之间的差，作为index位置的升温日期的天数使用
            arr[index] = i - index
        }
        //处理完毕当前温度入栈，等待寻找后续更大的温度
        stack.push(i)
        count++
    }
    return arr
};