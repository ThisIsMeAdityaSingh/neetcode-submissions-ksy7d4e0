class Solution:
    def maxArea(self, heights: List[int]) -> int:
        maxArea = 0
        start = 0
        end = len(heights) - 1

        while start < end:
            area = min(heights[start], heights[end]) * (end - start)
            maxArea = max(maxArea, area)

            if heights[start] <= heights[end]:
                start = start + 1
            else:
                end = end - 1
        
        return maxArea