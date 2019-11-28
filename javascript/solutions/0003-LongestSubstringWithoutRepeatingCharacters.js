/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let start = 0, maxLen = 0;
    const map = new Map();

    for(let i = 0; i < s.length; i++) {
        var ch = s[i];
    
        if(map.get(ch) >= start) start = map.get(ch) + 1;
        map.set(ch, i);
    
        if(i - start + 1 > maxLen) maxLen = i - start + 1;
  }

  return maxLen;
};
// @lc code=end

