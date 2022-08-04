# [3Sum Closest](https://leetcode.com/problems/3sum-closest)

### Category / Difficulty
algorithms / Medium

### Tags
array | two-pointers
	 		
### Companies
bloomberg

## Description

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:
```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```


Example 2:
```
Input: nums = [0,0,0], target = 1
Output: 0
```

## Constraints
- 3 <= nums.length <= 1000
- -1000 <= nums[i] <= 1000
- -104 <= target <= 104

## 簡而言之，它要的是
找出三數相加最接近target的值

## 思路

先將array從小到大進行排序，方便後續判斷指標移動方向

定義左右與中間指標

進入迴圈後，左指標先固定不動，讓中間指標與右側指標先進行遍歷

依序取出左中右的數值進行加總

若加總的總和與target值一致就可以直接回傳結果

若目前加總的總和是目前找到最接近target的數字，需將此數暫存起來，當所有數值都遍歷完畢後，此數便是結果值

接著決定要移動中間指標或右側指標，進行下一輪遍歷，若是目前總和小於target，則要移動中間指標，少減一點數字讓他更接近target值，反之亦然

當中間與右側指標都遍歷完當前區間後，移動左指標，進行下一輪遍歷