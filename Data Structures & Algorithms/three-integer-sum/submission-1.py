class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        pairs = []
        seen = set()

        for i in range(0, len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            start = i + 1
            end = len(nums) - 1

            while start < end:
                total = nums[i] + nums[start] + nums[end]

                if total> 0:
                    end = end - 1
                elif total < 0:
                    start = start + 1
                elif total == 0:
                    pairs.append([nums[i], nums[start], nums[end]])
                    start = start + 1
                    end = end - 1

                    while start < end and nums[start] == nums[start - 1]:
                        start = start + 1
                    
                    while end > start and nums[end] == nums[end + 1]:
                        end = end - 1

        return pairs 