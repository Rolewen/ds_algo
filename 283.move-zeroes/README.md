# [](https://leetcode.com/problems)

### Category / Difficulty
algorithms / Easy

### Tags
array | two-pointers
	 		
### Companies
bloomberg | facebook

## Description
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Example 1:
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

Example 2:
```
Input: nums = [0]
Output: [0]
``` 

## Constraints
- 1 <= nums.length <= 104
- -231 <= nums[i] <= 231 - 1

## 簡而言之，它要的是
將陣列中數字為0的元素都移動到陣列尾端

## 思路
定義一個i指標，表示當前要處理的元素位置
定義一個r指標，其記錄陣列最尾端，若有挪動過一次0到尾端，則將r指標-1，因為為0的元素位置是已經處理好的，也代表當i指標與r指標相會，就表示整個陣列都已經處理完畢

從第一個元素開始檢查，如果為0，則開始進行swap，將其移動到目前記錄的r指標位置
因為要保持原有的非零元素順序不變，所以要將其餘元素依序跟當前元素倆倆互換，步驟如下:

1. ['0',1,0,3,'12'] 0 <-> 12
2. ['12',1,0,'3',0] 12 <-> 3
3. ['3',1,'0',12,0] 3 <-> 0
4. ['0','1',3,12,0] 0 <-> 1
5. [1,0,3,12,0] done!

若交換完之後，當前元素是0則繼續進行一次swap，否則則挪動到下一元素進行檢查與swap

## Follow up
Could you minimize the total number of operations done?

