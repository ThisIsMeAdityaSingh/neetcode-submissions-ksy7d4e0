class Solution {
    hash(str){
        let sum = 0;
        for(let i = 0; i < str.length; i++){
            sum = sum + str.charCodeAt(i);
        }

        return sum;
    }
    rollHash(outIndex, inIndex, oldHash, str){
        const outValue = str.charCodeAt(outIndex);
        const inValue = str.charCodeAt(inIndex);

        return oldHash - outValue + inValue;
    }
    checkEquality(st1, st2){
        const map = new Map();
        for(const ch of st1){
            const count = map.get(ch) || 0;
            map.set(ch, count + 1);
        }

        for(const ch of st2){
            if(!map.get(ch)){
                return false;
            }

            const count = map.get(ch);
            if(count === 1){
                map.delete(ch);
            } else {
                map.set(ch, count - 1);
            }
        }

        return map.size === 0;
    }
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const baseHash = this.hash(s1);
        let hash = this.hash(s2.slice(0, s1.length));

        const windowLength = s1.length;
        let index = 0;

        while(index <= s2.length - windowLength){
            if(hash === baseHash){
                if(this.checkEquality(s1, s2.slice(index, index + windowLength))){
                    return true;
                }
            } else {
                hash = this.rollHash(index, index + windowLength, hash, s2);
            }
            index = index + 1;
        }

        return false;
    }
}
