# [226.invert-binary-tree](https://leetcode.com/problems/invert-binary-tree/)

### Category / Difficulty
algorithms / Easy

### Tags
tree
	 		
### Companies
Unknown

## Description
Given the root of a binary tree, invert the tree, and return its root.

 
Example 1:

![image info](./img/226e1.jpg)
```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

Example 2:

![image info](./img/226e2.jpg)
```
Input: root = [2,1,3]
Output: [2,3,1]
```

Example 3:
```
Input: root = []
Output: []
```

## Constraints
- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

## 簡而言之，它要的是
將二元樹左右反轉


## 思路
使用遞迴，將左子樹遞迴指向右指樹，反之亦然
終止條件: 若當前為樹葉節點，則無需左右交換直接回傳