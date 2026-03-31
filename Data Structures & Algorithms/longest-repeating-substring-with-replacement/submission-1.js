class Solution {
    maxFreq(map){
        let max = 0;
        for(const [key, value] of map){
            max = Math.max(max, value);
        }
        return max;
    }
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let start = 0, maxLength = 0;

        for(let end = 0; end < s.length; end++){
            const target = s[end];

            map.set(target, (map.get(target) || 0) + 1);
            const freq = this.maxFreq(map);

            if(end - start - freq + 1 <= k){
                maxLength = Math.max(maxLength, end - start + 1);
            } else {
                // reduce the frequency of the outgoing
                const outFreq = map.get(s[start]);
                if(outFreq){
                    map.set(s[start], outFreq - 1);
                }
                start = start + 1;
            }
        }

        return maxLength;
    }
}
