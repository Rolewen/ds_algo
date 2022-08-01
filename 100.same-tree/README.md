# [100.same-tree](https://leetcode.com/problems/same-tree)

### Category / Difficulty
algorithms / Easy

### Tags
tree | depth-first-search
	 		
### Companies
bloomberg

## Description
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:
![image info](./img/100e1.jpg)
```
Input: p = [1,2,3], q = [1,2,3]
Output: true
```

Example 2:
![image info](./img/100e2.jpg)
```
Input: p = [1,2], q = [1,null,2]
Output: false
```

Example 3:
![image info](./img/100e3.jpg)
```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

## Constraints
- The number of nodes in both trees is in the range [0, 100].
- -104 <= Node.val <= 104

## 簡而言之，它要的是
給予兩個二元樹，檢查是否完全相同

## 思路
依序走訪每個node，確認每個node值皆相等。

---

使用迴圈檢查，若p, q, qStack, pStack其中一項仍有值則進入迴圈

由左子樹開始檢查，依序紀錄走訪過的二元樹 (用於後續檢查完左子樹後，要切換至檢查右子樹使用)

離開迴圈條件:
1. 當p樹仍有node但q樹已無node，反之亦然
2. p.val與q.val不相等