class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        pointer = len(s) - 1

        start = 0
        while s[pointer] == " ":
            pointer = pointer - 1
        
        if pointer <= 0:
            # would mean string is just letters
            return len(s)
        
        start = pointer
        
        while s[pointer] != " ":
            pointer = pointer - 1
        
        return start - pointer