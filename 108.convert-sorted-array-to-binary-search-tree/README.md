# [108.convert-sorted-array-to-binary-search-tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree)

### Category / Difficulty
algorithms / Easy

### Tags
tree | depth-first-search
	 		
### Companies
airbnb

## Description
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

 

Example 1:

![image info](./img/108e101.jpg)
```
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
```

Explanation: [0,-10,5,null,-3,null,9] is also accepted:

![image info](./img/108e102.jpg)

Example 2:

![image info](./img/108e2.jpg)
```
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
```

## Constraints
- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums is sorted in a strictly increasing order.

## 簡而言之，它要的是
將有序陣列轉換為二元搜尋樹

二元搜尋樹是其左子樹中的後代皆小於根，右子樹中的後代皆大於根，且其左右子樹皆為二元搜尋樹

## 思路
定義mid, start, end

mid為陣列中中央的數值，其為根
start ~ mid-1，則為左子樹
mid+1 ~ end，為右子樹

使用遞迴方式傳入mid, start, end

即可建立二元搜尋樹

ex:
[1,2,3,4,5,6,7]

mid= index 3 = 4
左子樹的range為0~mid-1 = 0~2
右子樹的range為mid+1~length-1 = 4~6

       4
    /     \
 1,2,3   5,6,7


       4
    /     \
   2       6
  / \     / \
 1   3   5   7


## 進階思路

