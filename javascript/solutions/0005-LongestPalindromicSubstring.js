/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    if (!s) return '';
    if (s.length <= 1) return s;

    const str = '#' + s.split('').join('#') + '#';
    let C = 0, max = 0;
    const P = new Array(str.length).fill(0);
    
    for (let i = 0; i < str.length; i++) {
        if (i > max) {
            P[i] = 1;
        } else {
            const j = (C - i + C) < 0 ? 0 : (C - i + C);
            P[i] = Math.min(P[j], max - i < 0 ? 1 : max - i);
        }

        let lo = i - P[i],
            hi = i + P[i];
        while (lo >= 0 && hi < str.length && str[lo] === str[hi]) {
            lo --, hi ++;
        }
        P[i] = hi - i;
        
        if (i + P[i] > max) {
            max = i + P[i];
            C = i;
        }
    }
    
    let len = Math.max(...P);
    let index = P.indexOf(len);
    let res = str.substring(index - len + 1, index + len);

    return res.split('#').join('');
};

/*
const testList = ['abcdabcba', 'bbbbac', '', 'a'];
testList.forEach(test => {
    console.log(`'${test}': '${longestPalindrome(test)}'`);
});
*/

