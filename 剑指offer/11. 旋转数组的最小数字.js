/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    let min = numbers[0]
   for(let i = 0;i<numbers.length;i++) {
       if(numbers[i] < min) {
           min = numbers[i]
       }
   }
   return min
}