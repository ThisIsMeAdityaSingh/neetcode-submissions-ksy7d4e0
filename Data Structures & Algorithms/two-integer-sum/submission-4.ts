class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();
        for(let i = 0; i < nums.length; i++) {
            if(map.has(nums[i])) {
                return [map.get(nums[i]), i];
            }
            map.set(target - nums[i], i);
        }

        return null;
    }
}
