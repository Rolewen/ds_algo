# [257.binary-tree-paths](https://leetcode.com/problems/binary-tree-paths/)

### Category / Difficulty
algorithms / Easy

### Tags
tree | depth-first-search
	 		
### Companies
apple | facebook | google

## Description
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

 

Example 1:


![image info](./img/257e1.jpg)
```
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
```

Example 2:
```
Input: root = [1]
Output: ["1"]
```

## Constraints
- The number of nodes in the tree is in the range [1, 100].
- -100 <= Node.val <= 100

## 簡而言之，它要的是
列出根到各個Leaf的路徑

## 絲路
類似於111題的解法，使用遞迴陸續訪問各個node，並將拜訪過的各個節點用字串記錄下來(中間使用->分隔)，當拜訪到Leaf(無左右子樹)，則將此字串塞入res結果陣列裡
