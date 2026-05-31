class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # two pointer approach
        return len(set(nums)) != len(nums)