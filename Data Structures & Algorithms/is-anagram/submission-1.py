class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        ch_map = {}

        for ch in s:
            if ch in ch_map:
                ch_map[ch] = ch_map[ch] + 1
            else:
                ch_map[ch] = 1
        
        for ch in t:
            if not ch in ch_map:
                return False
            reduced = ch_map[ch] - 1
            if reduced == 0:
                del ch_map[ch]
                continue
            
            ch_map[ch] = reduced
        
        return len(ch_map) == 0