class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        # 1. create an array ans which would be of length
        #     2 * len(nums)
        ans = [0] * 2 * len(nums)
        for i in range(0, len(nums)):
            ans[i] = nums[i]
            ans[i + len(nums)] = nums[i]
        
        return ans