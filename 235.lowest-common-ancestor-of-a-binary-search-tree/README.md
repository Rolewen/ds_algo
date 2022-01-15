# [235.lowest-common-ancestor-of-a-binary-search-tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

### Category / Difficulty
algorithms / Easy

### Tags
tree
	 		
### Companies
amazon | facebook | microsoft | twitter

## Description
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


Example 1:

![image info](./img/235e1.jpg)
```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
```

Example 2:

![image info](./img/235e2.jpg)
```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
```

Example 3:
```
Input: root = [2,1], p = 2, q = 1
Output: 2
```

## Constraints
- The number of nodes in the tree is in the range [2, 105].
- -109 <= Node.val <= 109
- All Node.val are unique.
- p != q
- p and q will exist in the BST.

## 簡而言之，它要的是
找出兩個node其共同的最小祖先

## 絲路
先找到這兩個node，利用右子樹會大於左子樹的特性，若target node大於當前node，就往右子樹找，否則往左子樹找，並依序紀錄這兩個node分別有哪些祖先，另外自己也可能是他人的祖先，所以當找到target node時，也要將target node紀錄於祖先清單中。最後從祖先清單中查找最後一個相符的祖先，即為最小祖先


## 進階絲路
