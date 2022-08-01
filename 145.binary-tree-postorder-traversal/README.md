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

## 思路
使用遞迴撰寫

若左子樹存在，則遞迴傳入左子樹
若右子樹存在，則遞迴傳入右子樹

若左右子樹皆不存在，則將當前node值塞入回傳陣列中

## Follow up
Recursive solution is trivial, could you do it iteratively?

## 進階思路
遞迴解法在145.binary-tree-postorder-traversal.js

非遞迴解法寫在145-2.binary-tree-postorder-traversal.js

非遞迴解法

postorder處理順序為左右中

先將二元樹塞入初始stack中，進迴圈後於stack取出目前要處理的二元樹

若其為根且有後代，則要先處理後代，將其根node獨立塞入stack中 (只塞根node是因為左右子樹後面已經另外處理了，不需要重複塞入)

接著後續檢查有右子樹就塞入stack，再檢查左子樹有也一樣塞進stack (因stack特性為後進先出，所以左子樹要在右子樹後面塞入)

倘若沒有左子樹，也沒有右子樹，就代表它是已經是樹葉節點或中間的根節點了


