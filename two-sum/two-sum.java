class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> pairs = new HashMap();
        
        for (int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];

            if (pairs.get(diff) != null) {

                return new int[]{pairs.get(diff), i};
            }
            
            pairs.put(nums[i], i);
        }
        return new int[]{0,0};
    }
}