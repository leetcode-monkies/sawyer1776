/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []
   const hashmap = {}
   for(let i = 0; i < nums.length; i++){
       x = target - nums[i];

       if(hashmap.hasOwnProperty(x)){

           return [hashmap[x], i]

       }
   hashmap[nums[i]] = i

   }

   return result
};