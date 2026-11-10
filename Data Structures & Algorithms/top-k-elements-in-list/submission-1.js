class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const counter = new Array(nums.length + 1).fill(null);

        for(const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for(const [key, value] of map) {
            if(counter[value] === null) {
                counter[value] = [];
            }
            counter[value].push(key);
        }

        const topK = [];

        for(let i = counter.length; i >= 0 && k > 0; i--) {
            if(!counter[i]) continue;
            topK.push(...counter[i]);
            k = k - counter[i].length;
        }

        return topK;
    }
}
