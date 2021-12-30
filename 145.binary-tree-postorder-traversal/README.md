# [145.binary-tree-postorder-traversal](https://leetcode.com/problems/binary-tree-postorder-traversal)

### Category / Difficulty
algorithms / Easy

### Tags
stack | tree
	 		
### Companies
Unknown


## Description

Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

Example 1:


![image info](./img/145e1.jpg)
```
Input: root = [1,null,2,3]
Output: [3,2,1]
```

Example 2:
```
Input: root = []
Output: []
```

Example 3:
```
Input: root = [1]
Output: [1]
```

## Constraints
- The number of the nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

## 簡而言之，它要的是
使用後序(左右中)走訪二元樹

## 絲路
使用遞迴撰寫

若左子樹存在，則遞迴傳入左子樹
若右子樹存在，則遞迴傳入右子樹

若左右子樹皆不存在，則將當前node值塞入回傳陣列中

## Follow up
Recursive solution is trivial, could you do it iteratively?

## 進階絲路



