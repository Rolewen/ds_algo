# [217.contains-duplicate](https://leetcode.com/problems/contains-duplicate/)

### Category / Difficulty
algorithms / Easy

### Tags
array | hash-table
	 		
### Companies
airbnb | palantir | yahoo

## Description
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:
```
Input: nums = [1,2,3,1]
Output: true
```

Example 2:
```
Input: nums = [1,2,3,4]
Output: false
```

Example 3:
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

## Constraints
- 1 <= nums.length <= 105
- -109 <= nums[i] <= 109

## 簡而言之，它要的是
檢查陣列中是否有出現兩次以上相同的值

## 思路
將出現過的值紀錄在map表中，依序塞入陣列中各個值，若已經出現過則中斷迴圈回傳結果為true

