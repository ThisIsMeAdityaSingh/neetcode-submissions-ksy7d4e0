class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)
        longest_series = 0

        for num in nums:
            # it's not the start of the sequence
            if num-1 in nums_set:
                continue

            # it is at the start of sequence
            count = 1

            while num + 1 in nums_set:
                count = count + 1
                num = num + 1
            
            longest_series = max(count, longest_series)
        
        return longest_series