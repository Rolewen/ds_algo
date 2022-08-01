# [88.merge-sorted-array](https://leetcode.com/problems/merge-sorted-array)

### Category / Difficulty
algorithms / Easy

### Tags
array | two-pointers
	 		
### Companies
bloomberg | facebook | microsoft

## Description
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

Example 2:
```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

Example 3:
```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

## Constraints
- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- -109 <= nums1[i], nums2[j] <= 109

## 簡而言之，它要的是

將陣列2合併至陣列1中，並依照數值由小到大排序

## 思路

分兩步驟做，先將陣列2元素加入於陣列1中，接著再使用泡沫排序法對陣列1進行排序


## Follow up
Can you come up with an algorithm that runs in O(m + n) time?


## 進階思路

從兩個陣列中最後一個數字開始相互比對，較大的加入尾端

例如[4,5,6,0,0,0], [1,2,3]

比對最後一位(m-1) & (n-1),分別得到6, 3

可以知道所有數中最大的是nums1中的6，把它放置於陣列中最後一位，並且移動m指標

往下一位數與nums2陣列的數字進行下一輪比對 (若較大的是在nums2陣列，則移動的會是n指標)

直到所有nums2的數字皆比對完畢為止