class Solution:
    def scoreOfString(self, s: str) -> int:
        sum_ch = 0

        for i in range(1, len(s)):
            diff = abs(ord(s[i-1]) - ord(s[i]))
            sum_ch = sum_ch + diff
        
        return sum_ch