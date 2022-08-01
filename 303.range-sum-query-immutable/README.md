# [303.range-sum-query-immutable](https://leetcode.com/problems/range-sum-query-immutable)

### Category / Difficulty
algorithms / Easy

### Tags
dynamic-programming
	 		
### Companies
palantir

## Description
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

Example 1:
```
Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
```

## Constraints
- 1 <= nums.length <= 104
- -105 <= nums[i] <= 105
- 0 <= left <= right < nums.length
- At most 104 calls will be made to sumRange.

## 簡而言之，它要的是
實作一物件prototype，可計算傳入該物件中的指定陣列範圍加總

## 思路
程式碼中有兩種solution

** solution 1 **
將傳入的nums塞入this.array中

於prototype裡將this.array的index left~right的各數值依序加總並回傳


** solution 2 **
先計算各個index的加總值(i, i到i+1, i到i+2...)，並將其預先放入this.sum

假設nums陣列數值為:[1,2,3,4,5]
則sum的陣列加總會長這樣:[1,3,6,10,15]

若要算left=3, right=4
則為 nums陣列的 4 + 5 
=> sum陣列的 (15-10)+(10-6) 
=> 可再進一步簡化成 15 - 6 => 只要取出sum陣列的index right + left - 1即為所求

