class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;
        Map<Character, Integer> map = new HashMap<>();
        for(char sc: s.toCharArray()) {
            map.put(sc, map.getOrDefault(sc, 0) + 1);
        }

        for(char tc: t.toCharArray()) {
            if(map.containsKey(tc)) {
                int count = map.get(tc);
                if(count == 1){
                    map.remove(tc);
                } else {
                    map.put(tc, count - 1);
                }
            } else {
                return false;
            }
        }

        return map.size() == 0;
    }
}
