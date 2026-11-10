class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if(strs.length <= 1) return [strs];
        const key = new Array(26).fill(0);
        
        // we can generate keys
        // while adding to it

        // but first I need to understand how to convert char to ascii
        const map = new Map<string, string[]>();

        for(const str of strs) {
            for(const st of str) {
                const num = st.charCodeAt(0);
                key[num-97] = key[num - 97] + 1;
            }

            const mapKey = key.join(",");

            if(!map.has(mapKey)) {
                map.set(mapKey, [str]);
            } else {
                map.get(mapKey).push(str);
            }

            for(const st of str) {
                const num = st.charCodeAt(0);
                key[num-97] = 0;
            }
        }

        const group = [];
        for(const [key, value] of map) {
            group.push(value);
        }

        return group;
    }
}
