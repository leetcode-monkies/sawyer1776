// Given a string s, return the longest
// palindromic
// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length;
    let result = '';

    const reverse = (string)=> {
        let reversed = ''
        for(let i = 1; i <= string.length; i ++) {
        reversed += string[string.length - i]
    }
    return reversed
    }

    const reversed = reverse(s)

    for(let root = 0; root < len; root ++ ){
        for(let sub = 0; sub <=  root; sub ++){
            const tmp = s.slice(sub, sub + (len - root))

            if(reversed.includes(tmp)){
                const reversedTmp = reverse(tmp)
                if(reversedTmp.includes(tmp)){
                result = tmp
                return result
                }
            }
        }
    }




};