/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let results = [];
    const len = nums.length;
    nums.sort((a, b) => a - b)

    for (let a = 0; a < len; a++) {
        if (nums[a] > 0) {
            break
        }
        if (a > 0 && nums[a] === nums[a - 1]) {
            continue;
        }
        let b = a + 1;
        let c = len - 1;
        while (b < c) {
            current = nums[a] + nums[b] + nums[c]
            if (current > 0) {
                c--;
            } else if (current < 0) {
                b++;
            }
            else if (current === 0) {
                let newResult = [nums[a], nums[b], nums[c]];
                results.push(newResult)
                lastB = nums[b];
                lastC = nums[c];
                while (b < c && nums[b] === lastB) {
                    b++;
                }
                while (b < c && nums[c] === lastC) {
                    c--;
                }
            }

        }

    }

    return results;

};