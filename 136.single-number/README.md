# [](https://leetcode.com/problems)

### Category / Difficulty
algorithms / Easy

### Tags
hash-table | bit-manipulation
	 		
### Companies
airbnb | palantir

## Description
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:
```
Input: nums = [2,2,1]
Output: 1
```
Example 2:
```
Input: nums = [4,1,2,1,2]
Output: 4
```
Example 3:
```
Input: nums = [1]
Output: 1
```

## Constraints
- 1 <= nums.length <= 3 * 104
- -3 * 104 <= nums[i] <= 3 * 104
- Each element in the array appears twice except for one element which appears only once.

## 簡而言之，它要的是
找出數列中不重複的數值

## 思路
使用dictionary紀錄出現次數
最後將出現一次的數值回傳

## 進階思路
使用互斥或

