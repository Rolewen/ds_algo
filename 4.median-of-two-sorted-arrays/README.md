# [4.median-of-two-sorted-arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)

### Category / Difficulty
algorithms / Hard

### Tags
array | binary-search | divide-and-conquer
	 		
### Companies
adobe | apple | dropbox | google | microsoft | yahoo | zenefits

## Description
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).


Example 1:
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

Example 2:
```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

## Constraints
- nums1.length == m
- nums2.length == n
- 0 <= m <= 1000
- 0 <= n <= 1000
- 1 <= m + n <= 2000
- -106 <= nums1[i], nums2[i] <= 106

## 簡而言之，它要的是
輸出兩個有序陣列的中位數

## 絲路
合併兩個陣列，並重新由大到小排序(若其中一個陣列沒有任何元素，則無須進行排序)
如果陣列長度除以2是奇數，則該數值取最小整數及為結果值
若陣列長度除以2是偶數，則該數值+該數值之前一元素的平均值即為結果值
