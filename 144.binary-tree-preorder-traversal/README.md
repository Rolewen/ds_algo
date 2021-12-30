# [144.binary-tree-preorder-traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

### Category / Difficulty
algorithms / Easy

### Tags
stack | tree
	 		
### Companies
Unknown

## Description

Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:

![image info](./img/144e1.jpg)
```
Input: root = [1,null,2,3]
Output: [1,2,3]
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
- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

## 簡而言之，它要的是
使用Preoder依序走訪二元樹各node

## 絲路
preorder走訪為中左右

使用stack紀錄當前二元樹(用於檢查完左半部要改至右半部檢查使用)

當前node不為空或stack仍有二元樹資料則進入迴圈檢查

若當前node有值，將其記錄至回傳陣列中，接著將當前二元樹紀錄於stack裡，再來將指標指向當前node的左子樹

若當前node沒有值，則表示左邊子樹已經走訪完畢，要往右子樹檢查，從stack中取出最後一個二元樹，接著將指標指向右子樹，進入下一輪迴圈檢查




## Follow up
Recursive solution is trivial, could you do it iteratively?

