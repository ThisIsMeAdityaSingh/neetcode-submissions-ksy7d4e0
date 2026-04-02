class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for (const str of strs) {
            const wordMap = Array.from({length: 26}, () => 0)

            for(let i = 0; i < str.length; i++) {
                const key = str[i].charCodeAt(0) - 97;
                wordMap[key]++;
            }

            const key = wordMap.join("-");
            if (!map.has(key)) {
                map.set(key, []);
            }
            
            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}
