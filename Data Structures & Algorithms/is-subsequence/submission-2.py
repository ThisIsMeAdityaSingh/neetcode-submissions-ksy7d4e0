class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        # 1. for s to be a subsequence of t, it should be equal or shorter
        #    than t.
        if len(s) > len(t):
            return False
        
        # 2. s is an empty string
        if not s:
            return True

        # 3. Now check for the letters - two pointer approach
        pointer_s = 0
        pointer_t = 0

        while pointer_s < len(s) and pointer_t < len(t):
            if t[pointer_t] == s[pointer_s]:
                pointer_s = pointer_s + 1
            pointer_t = pointer_t + 1
        
        return pointer_s == len(s)
