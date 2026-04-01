class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_map = {}

        for i in range(0, len(nums)):
            if str(nums[i]) in num_map:
                return [num_map[str(nums[i])], i]
            
            pair = target - nums[i]
            num_map[str(pair)] = i
        
        return [-1, -1]