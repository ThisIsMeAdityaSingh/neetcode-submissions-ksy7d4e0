class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // default value of int in java is 0
        int[] array = new int[26];
        Map<String, List<String>> map = new HashMap<>();

        for(String str: strs) {
            for(char st: str.toCharArray()) {
                array[st - 'a'] = array[st - 'a'] + 1;
            }

            String key = Arrays.toString(array);
            if(!map.containsKey(key)) {
                List<String> list = new ArrayList<>();
                list.add(str);
                map.put(key, list);
            } else {
                map.get(key).add(str);
            }

            // putting back to normal
            for(char st: str.toCharArray()) {
                array[st - 'a'] = 0;
            }
        }

        return new ArrayList<>(map.values());
    }
}
