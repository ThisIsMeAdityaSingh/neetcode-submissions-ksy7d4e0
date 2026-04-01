class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let pointer = 0;
        let maxFreq = -1;

        while (pointer < nums.length) {
            let freq = 0;

            while (pointer < nums.length && nums[pointer] === 1) {
                freq++;
                pointer++;
            }

            maxFreq = Math.max(maxFreq, freq);
            pointer++;
        }

        return maxFreq;
    }
}
