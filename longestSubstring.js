/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0
    let tmp = [];

    for(let ri = 0; ri < s.length; ri ++){
        const current = s.at(ri)
        if (result >= 95){
            return result
        }

        if(tmp.includes(current)){
            if(tmp.length > result){
                result = tmp.length
            }
            while(tmp.includes(current)){
                tmp.shift()
            }

        }
        tmp.push(current)
    }
    if(tmp.length > result){
         result = tmp.length
     }

    return result;

};