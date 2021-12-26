# [101.symmetric-tree](https://leetcode.com/problems/symmetric-tree)

### Category / Difficulty
algorithms / Easy

### Tags
tree | depth-first-search | breadth-first-search
	 		
### Companies
bloomberg | linkedin | microsoft

## Description
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:

![image info](./img/101e1.jpg)
```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

Example 2:

![image info](./img/101e2.jpg)
```
Input: root = [1,2,2,null,3,null,3]
Output: false
```

## Constraints
- The number of nodes in the tree is in the range [1, 1000].
- -100 <= Node.val <= 100

## 簡而言之，它要的是
檢查二元樹是否為對稱二元樹

## 絲路
使用兩個指標l, r，l依序走訪左子樹直至檢查完最後一節點，再返回左半部的右子樹，r依序走訪右子樹直至檢查完最後一節點，再返回右半部的左子樹，確認雙方node值皆相等。

---

定義兩個stack，用於走回另一半的子樹(左子樹走至左邊的樹葉節點後要能返回檢查左半部的右子樹)

定義兩個指標l, r，用於紀錄當前左右子樹走訪的node，比對方數值是否相等

使用迴圈依序走訪

終止條件(符合其中一個即可)
1. 當左子樹或右子樹指標其中一個為空
2. 左子樹node與右子樹node值不相等

其他:

若左右兩側數值相等，則左側node繼續往左邊走，右側node繼續往右邊走

若兩邊子樹都已經為空，代表已經訪問到樹葉節點，且都相等，則需開始檢查另一半(左半部要開始檢查右側節點、右半部要開始檢查左側節點)

