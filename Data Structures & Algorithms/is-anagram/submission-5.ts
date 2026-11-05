class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const map = new Map<string, number>();
        for(const sc of s) {
            map.set(sc, (map.get(sc) || 0) + 1);
        }

        for(const tc of t) {
            if(!map.has(tc)) return false;
            if(map.get(tc) == 1){
                map.delete(tc);
                continue;
            }

            map.set(tc, map.get(tc) - 1);
        }

        return map.size === 0;
    }
}
