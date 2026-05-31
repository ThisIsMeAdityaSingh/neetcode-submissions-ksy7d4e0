class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        counter = {}

        for letter in s:
            if letter in counter:
                counter[letter] = counter[letter] + 1
            else:
                counter[letter] = 1
        
        for letter in t:
            if not letter in counter or counter[letter] == 0:
                return False
            else:
                counter[letter] = counter[letter] - 1
                if counter[letter] == 0:
                    del counter[letter]
        
        return len(counter) == 0