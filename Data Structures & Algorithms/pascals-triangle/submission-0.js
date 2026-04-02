class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        if (numRows === 1) return [[1]];

        const result = [[1]];
        for (let i = 1; i < numRows; i++) {
            const newArrayLength = result[i-1].length + 1;
            const newArray = Array.from({length: newArrayLength}, () => 0);

            newArray[0] = 1;
            newArray[newArrayLength - 1] = 1;
            let pointer = 1;

            for(let j = 0; j < result[i-1].length - 1; j++) {
                newArray[pointer++] = result[i-1][j] + result[i-1][j+1];
            }

            result.push(newArray);
        }

        return result;
    }
}
