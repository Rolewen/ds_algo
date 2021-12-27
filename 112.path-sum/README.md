# [112.path-sum](https://leetcode.com/problems/path-sum)

### Category / Difficulty
algorithms / Easy

### Tags
tree | depth-first-search
	 		
### Companies
microsoft

## Description

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

 

Example 1:

![image info](./img/112e1.jpg)
```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
```

Example 2:

![image info](./img/112e2.jpg)
```
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
```

Example 3:
```
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
```

## Constraints
- The number of nodes in the tree is in the range [0, 5000].
- -1000 <= Node.val <= 1000
- -1000 <= targetSum <= 1000

## 簡而言之，它要的是
查看從root至leaf，是否有其中一條路徑的數字加總總合為要求的路徑長度(targetNum)

## 絲路
使用遞迴方式解，分別查找左右子樹並搭配targetNum依序減去走過的路徑

若root為null，則回傳false，表示路徑不存在

若已查找到樹葉節點(left & right皆為null)，且targetNum為0，表示此條路徑存在，回傳true