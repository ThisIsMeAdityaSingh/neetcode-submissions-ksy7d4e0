class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        word_map = {}

        for i in range(0, len(strs)):
            num_map = [0] * 26

            for j in range(0, len(strs[i])):
                key = ord(strs[i][j]) - ord('a')
                num_map[key] = num_map[key] + 1
            
            key = tuple(num_map)

            if key in word_map:
                word_map[key].append(strs[i])
            else:
                word_map[key] = [strs[i]]
        
        return list(word_map.values())