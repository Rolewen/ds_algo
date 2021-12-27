# [110.balanced-binary-tree](https://leetcode.com/problems/balanced-binary-tree)

### Category / Difficulty
algorithms / Easy

### Tags
tree | depth-first-search
	 		
### Companies
bloomberg

## Description
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:

![image info](./img/110e1.jpg)
```
Input: root = [3,9,20,null,null,15,7]
Output: true
```

Example 2:

![image info](./img/110e2.jpg)
```
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
```

Example 3:
```
Input: root = []
Output: true
```

## Constraints
- The number of nodes in the tree is in the range [0, 5000].
- -104 <= Node.val <= 104

## 簡而言之，它要的是
檢查是否為平衡樹

平衡樹的定義:
- 左右子樹的高度相差小於等於1
- 左子樹與其後代子樹皆是平衡的
- 右子樹與其後代子樹皆平衡的

## 絲路
撰寫一funtion用於計算子樹最大深度

檢查第一層左右子樹深度，是否相減之後高度小於於1 (代表為AVL-tree)
若是，則再往下一層左右子樹檢查
直到檢查完所有節點或左右子樹高度相差大於1 (代表非AVL-tree)


