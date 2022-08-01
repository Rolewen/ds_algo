# [3sum](https://leetcode.com/problems/3sum/)

### Category / Difficulty
algorithms / Medium

### Tags
array | two-pointers
	 		
### Companies
adobe | amazon | bloomberg | facebook | microsoft

## Description

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

Example 2:
```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

Example 3:
```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```
 
## Constraints
- 3 <= nums.length <= 3000
- -105 <= nums[i] <= 105

## 簡而言之，它要的是
從陣列中找出三個數字相加為0的所有組合，並回傳其數值組合

舉例:[-2, -1, 0, 2];
回傳:[[-2,0,2]]

## 思路
設定target目標為0，並將數值進行由小到大的排序


由左至右開始依序遍歷數值

當當前數值大於target時，則離開迴圈，因為我們需要負數來將值扣至0（若當前數值大於target時，則表示當前數字是正數）

檢查數值是否重複出現，若當前數值與前一數值相等，該數值已經檢查過了，則可跳過此輪檢查。

設定右指標與中間指標（介於左右指標之間）
若左指標、右指標、中間指標數值加總為0，則將這三個數字塞入結果陣列中，並將兩個指標移到下一個要做計算的數值位置

若加總不為零，則要選擇要移動中間指標或右邊指標
若加總的數字大於target，則移動右指標 （代表加過頭了，要再找小一點的數字來加）
若加總的數字小於target，則移動左指標（代表減過頭了，要再找大一點的數字來減）