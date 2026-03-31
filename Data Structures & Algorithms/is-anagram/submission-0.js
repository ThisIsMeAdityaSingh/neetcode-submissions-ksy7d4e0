class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // we gonna use hashmaps
        const map = new Map();

        for (const ch of s) {
            if (!map.has(ch)) {
                map.set(ch, 1);
            } else {
                map.set(ch, map.get(ch) + 1);
            }
        }

        for (const ch of t) {
            if (!map.has(ch)) return false;
            const reduced = map.get(ch) - 1;
            if (reduced === 0) {
                map.delete(ch);
                continue;
            }

            map.set(ch, reduced);
        }

        return map.size === 0;
    }
}
