# [228.summary-ranges](https://leetcode.com/problems/summary-ranges/)

### Category / Difficulty
algorithms / Easy

### Tags
array
	 		
### Companies
google

## Description

You are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:
```
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
```

Example 2:
```
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
```

## Constraints
- 0 <= nums.length <= 20
- -231 <= nums[i] <= 231 - 1
- All the values of nums are unique.
- nums is sorted in ascending order.

## 簡而言之，它要的是
找出連續範圍，如果當前數字nums[i]-nums[i-1]大於1，表示範圍已經中斷，此數字為屬於另外一個範圍，否則表示同一個範圍


## 絲路
用tmp陣列紀錄當前範圍，當出現nums[i]-nums[i-1]大於1的情況表示範圍已經中斷，此時tmp陣列的頭跟尾就代表是一個連續範圍，將其塞入結果陣列中，並將tmp陣列清空，繼續尋找下一段範圍