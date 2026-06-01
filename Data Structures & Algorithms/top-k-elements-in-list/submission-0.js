class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();

        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        const inverse = Array.from({ length: nums.length + 1 }, () => []);

        for (const [key, value] of freqMap) {
            inverse[value].push(key);
        }

        const highNumbers = [];

        for (let i = inverse.length - 1; i >= 0; i--) {
            if (inverse[i] && inverse[i].length) {
                highNumbers.push(...inverse[i]);

                if(highNumbers.length === k) break;
            }
        }

        return highNumbers;
    }
}
