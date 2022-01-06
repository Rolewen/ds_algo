# [219.contains-duplicate-ii](https://leetcode.com/problems/contains-duplicate-ii/)

### Category / Difficulty
algorithms / Easy

### Tags
array | hash-table
	 		
### Companies
airbnb | palantir

## Description

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


Example 1:
```
Input: nums = [1,2,3,1], k = 3
Output: true
```

Example 2:
```
Input: nums = [1,0,1,1], k = 1
Output: true
```

Example 3:
```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

## Constraints
- 1 <= nums.length <= 105
- -109 <= nums[i] <= 109
- 0 <= k <= 105


## 簡而言之，它要的是
檢查陣列中第i元素到第i+k元素的範圍內，是否存在相同的元素

## 絲路
依序遍歷陣列，每次皆擷取出範圍為i~i+k的陣列元素，檢查是否有出現當前元素
