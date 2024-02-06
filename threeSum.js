/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];
    let tmp = {}
    let hash = {

    };

    const compare = (a, b) => {
     return a-b
    }
    nums = nums.sort(compare)

    for (let i = 0; i < nums.length; i++) {

        if (hash[nums[i]] !== undefined) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]] = 1;
        }
    }
    let prev;

    for (let root = 0; root < nums.length; root++) {
        const x = nums[root];
        if (x === prev) {
            continue
        }
        prev = x;
        // console.log('Hash is', hash);
        for (let sec = root + 1; sec < nums.length; sec++) {
            hash[x + ''] = hash[x + ''] - 1;
            let target = 0 - x;
            const y = nums[sec];
            hash[y + '']--
            target = target - y;
            // console.log('new tgt', target)
            if (hash[target + ''] > 0) {
                let newAnswer = [x,y,target];
                newAnswer.sort(compare);
                tmp[newAnswer] = newAnswer;
            }
            hash[y + '']++;
        }

    }
    for(answer in tmp){
        result.push(tmp[answer]);
    }

    return result;

};