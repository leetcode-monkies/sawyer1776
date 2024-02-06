/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ,'-', '+']

    let result;

    let tmp = ''
    for (let i = 0; i < s.length; i++) {
        if (nums.includes(s[i])) {
            tmp += s[i]
        }
        else if(s[i] !== ' '){
            return Number(tmp)
        }

    }
    result = Number(tmp)

    return result



};