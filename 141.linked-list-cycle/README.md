# [](https://leetcode.com/problems)

### Category / Difficulty
algorithms / Easy

### Tags
linked-list | two-pointers
	 		
### Companies
amazon | bloomberg | microsoft | yahoo

## Description

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:

![image info](./img/141e1.jpg)
```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

Example 2:

![image info](./img/141e2.jpg)
```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

Example 3:

![image info](./img/141e3.jpg)
```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

## Constraints
- The number of the nodes in the list is in the range [0, 104].
- -105 <= Node.val <= 105
- pos is -1 or a valid index in the linked-list.

## 簡而言之，它要的是
檢查是否為循環鏈結串列

## 絲路
使用兩個指標，慢指標一個一次走一格，快指標一個一次走兩格

若為循環串列，快指標會追上慢指標，當快慢指標相等則表示為循環串列

若慢指標或快指標其中一指標為空，表示非循環串列


## Follow up
Can you solve it using O(1) (i.e. constant) memory?

## 進階絲路

