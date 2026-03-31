class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let left = 0, right = 0;

        const letterSet = new Set();

        while(left <= right && right < s.length){
            const target = s[right];
            if(!letterSet.has(target)){
                letterSet.add(target);

                maxLength = Math.max(maxLength, letterSet.size);
                right = right + 1;

                continue;
            } else {
                letterSet.delete(s[left]);
                left = left + 1;
            }
        }

        return maxLength;
    }
}
