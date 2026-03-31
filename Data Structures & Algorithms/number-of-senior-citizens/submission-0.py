class Solution:
    def countSeniors(self, details: List[str]) -> int:
        # so age would be 11 12
        old_hags = 0
        for i in range(0, len(details)):
            age = int(details[i][11] + details[i][12])
            if age > 60:
                old_hags = old_hags + 1
        
        return old_hags
