class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return "";
        if (strs.length === 1) return strs[0];
        let pointer = 0;
        let longestSubString = "";
        
        while (pointer < strs[0].length) {
            const currValue = strs[0][pointer];

            for(let i = 0; i < strs.length; i++) {
                if (pointer >= strs[i].length) return longestSubString;
                if (strs[i][pointer] !== currValue) return longestSubString;
            }
            
            longestSubString = longestSubString + strs[0][pointer];
            pointer++;
        }

        return longestSubString;
    }
}
