class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # two pointer approach:
        # 1. start = 0, end = last
        # 2. start + end > target: move from the bigger number
        # 3. start + end < target: move from the smaller number

        start = 0
        end = len(numbers) - 1

        while start < end:
            if numbers[start] + numbers[end] == target:
                return [start + 1, end + 1]
            
            if numbers[start] + numbers[end] < target:
                start = start + 1
            else:
                end = end - 1
        
        return None