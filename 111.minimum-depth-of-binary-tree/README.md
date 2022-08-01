# [111.minimum-depth-of-binary-tree](https://leetcode.com/problems/minimum-depth-of-binary-tree)

### Category / Difficulty
algorithms / Easy

### Tags
tree | depth-first-search | breadth-first-search
	 		
### Companies
Unknown

## Description
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

 

Example 1:

![image info](./img/111e1.jpg)
```
Input: root = [3,9,20,null,null,15,7]
Output: 2
```

Example 2:
```
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
```

## Constraints
- The number of nodes in the tree is in the range [0, 105].
- -1000 <= Node.val <= 1000

## 簡而言之，它要的是
找二元樹中最低深度路徑

## 思路
使用遞迴處理

若root不存在則回傳0
root無左右子樹回傳1 (只有一個節點，深度為1)
root有左右子樹，則遞迴檢查各左右子樹，回傳最小深度
若只有左子樹，遞迴檢查左子樹最小深度
若只有右子樹，遞迴檢查右子樹最小深度

