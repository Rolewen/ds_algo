# [268.missing-number](https://leetcode.com/problems/missing-number/)

### Category / Difficulty
algorithms / Easy

### Tags
array | math | bit-manipulation
	 		
### Companies
bloomberg | microsoft

## Description

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:
```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

Example 2:
```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```

Example 3:
```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
```

## Constraints
- n == nums.length
- 1 <= n <= 104
- 0 <= nums[i] <= n
- All the numbers of nums are unique.

## 簡而言之，它要的是
給予一陣列，檢查從0~陣列長度中不見的數字

假設範圍為0~3，陣列內容為0,1,3，則表示消失的數字為2

## 絲路
使用迴圈將i由0開始檢查，若i值不存在於陣列中，則表示其為消失的數字

## Follow up
Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

