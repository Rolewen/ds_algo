# [169.majority-element](https://leetcode.com/problems/majority-element/)

### Category / Difficulty
algorithms / Easy

### Tags
array | divide-and-conquer | bit-manipulation
	 		
### Companies
adobe | zenefits

## Description
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:
```
Input: nums = [3,2,3]
Output: 3
```

Example 2:
```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

## Constraints
- n == nums.length
- 1 <= n <= 5 * 104
- -231 <= nums[i] <= 231 - 1

## 簡而言之，它要的是
找出陣列中出現最多次的數字且出現次數需大於總元素的一半

## 絲路
使用mapping表紀錄已出現過的數字與其個數，紀錄當前找到出現最多次的數字

若當前數字出現次數大於目前已記錄的數值，則將結果替換為當前數值

## Follow-up
Could you solve the problem in linear time and in O(1) space?

