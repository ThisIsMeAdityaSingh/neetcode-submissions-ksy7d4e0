class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let start = 0, end = 1;

        while(start <= end && end < prices.length){
            const priceDiff = prices[end] - prices[start];
            const profit = priceDiff >= 0;

            if(!profit){
                start = start + 1;
                continue;
            }

            maxProfit = Math.max(maxProfit, priceDiff);
            end = end + 1;
        }

        return maxProfit;
    }
}
