class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        counter = {}

        for letter in s:
            counter[letter] = counter.get(letter, 0) + 1
        
        for letter in t:
            if not letter in counter or counter[letter] == 0:
                return False
            else:
                counter[letter] = counter[letter] - 1
                if counter[letter] == 0:
                    del counter[letter]
        
        return True