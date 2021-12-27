# [104.maximum-depth-of-binary-tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)

### Category / Difficulty
algorithms / Easy

### Tags
tree | depth-first-search
	 		
### Companies
apple | linkedin | uber | yahoo

## Description
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:

![image info](./img/104e1.jpg)
```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

Example 2:
```
Input: root = [1,null,2]
Output: 2
```

## Constraints
- The number of nodes in the tree is in the range [0, 104].
- -100 <= Node.val <= 100

## 簡而言之，它要的是
找出這顆二元樹的深度

## 絲路
使用遞迴檢查左右子樹，回傳最大結果值。樹的高度計算最後須多加1是因為已經經過了最後一個子節點

