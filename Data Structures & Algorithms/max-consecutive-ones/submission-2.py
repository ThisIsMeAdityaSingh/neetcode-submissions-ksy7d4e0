class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        max_freq = -1
        pointer = 0

        while pointer < len(nums):
            freq = 0

            while pointer < len(nums) and nums[pointer] == 1:
                freq = freq + 1
                pointer = pointer + 1
            
            max_freq = max(max_freq, freq)
            pointer = pointer + 1
        
        return max_freq