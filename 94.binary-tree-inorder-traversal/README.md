# [94.binary-tree-inorder-traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

### Category / Difficulty
algorithms / Easy

### Tags
hash-table | stack | tree
	 		
### Companies
microsoft

## Description
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
![image info](./img/94e1.jpg)
```
Input: root = [1,null,2,3]
Output: [1,3,2]
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
依照inorder次序拜訪二元樹，輸出依序經過的節點

## 思路
由當前節點(根)開始，一路往左找，找到樹葉節點，再回到父層，接著切至右層子節點，重複前述步驟。

---

定義一個stack，用於紀錄二元樹，做到返回父層
定義一個array res，用於紀錄輸出結果

當root存在或stack裡面有值時:

由根開始，若左子節點存在則須將當前的二元樹塞入stack，接著移動至左子節點，繼續下一輪查找。

若左子節點不存在，則取出目前stack中最後一個塞入的二元樹，並設定其為root，根node的部分，其為所求值，需塞入res陣列中，接著往右子節點走，繼續下一輪查找。



## Follow up
Recursive solution is trivial, could you do it iteratively?

## 進階思路
遞迴解法與非遞迴解法皆有寫於94-2.binary-tree-inorder-traversal裡

