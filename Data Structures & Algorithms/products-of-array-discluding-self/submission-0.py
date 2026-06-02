class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        product = 1
        zero_count = 0

        for num in nums:
            if num == 0:
                zero_count = zero_count + 1
            else:
                product = product * num
        
        if zero_count > 1:
            return [0 for num in nums]
        
        if zero_count == 1:
            result = []
            for num in nums:
                if num == 0:
                    result.append(product)
                else:
                    result.append(0)
            
            return result
        
        result = []
        for num in nums:
            result.append(int(product / num))
        
        return result