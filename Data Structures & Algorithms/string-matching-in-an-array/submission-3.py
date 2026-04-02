class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        substrings = set()

        for i in range(0, len(words)):
            for j in range(0, len(words)):
                if i == j:
                    continue
                
                if words[j].__contains__(words[i]):
                    substrings.add(words[i])
                    break
        
        return list(substrings)