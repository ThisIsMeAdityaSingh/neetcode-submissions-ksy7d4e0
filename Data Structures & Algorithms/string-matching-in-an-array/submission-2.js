class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const substrings = new Set();

        for(const word of words) {
            for(const currWord of words) {
                if (word === currWord) continue;
                if (currWord.includes(word)) {
                    substrings.add(word);
                    break;
                }
            }
        }

        return [...substrings];
    }
}
