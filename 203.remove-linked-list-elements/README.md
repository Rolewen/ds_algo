# [203.remove-linked-list-elements](https://leetcode.com/problems/remove-linked-list-elements/)

### Category / Difficulty
algorithms / Easy

### Tags
linked-list
	 		
### Companies
Unknown

## Description
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:

![image info](./img/203e1.jpg)
```
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
```

Example 2:
```
Input: head = [], val = 1
Output: []
```

Example 3:
```
Input: head = [7,7,7,7], val = 7
Output: []
```

## Constraints
- The number of nodes in the list is in the range [0, 104].
- 1 <= Node.val <= 50
- 0 <= val <= 50

## 簡而言之，它要的是
給予一個鏈結串列，刪除節點中值與參數val相等的node，並回傳修改後的linked list

## 絲路
使用雙指標，一個紀錄前一節點(prev)，一個紀錄當前節點(head)
若目前元素與參數val相等表示需要被刪除，則前一節點指向當下節點的下一個節點，即可刪除目前元素

