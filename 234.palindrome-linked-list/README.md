# [234.palindrome-linked-list](https://leetcode.com/problems/palindrome-linked-list/)

### Category / Difficulty
algorithms / Easy

### Tags
linked-list | two-pointers
	 		
### Companies
amazon | facebook

## Description
Given the head of a singly linked list, return true if it is a palindrome.

Example 1:

![image info](./img/234e1.jpg)
```
Input: head = [1,2,2,1]
Output: true
```

Example 2:

![image info](./img/234e2.jpg)
```
Input: head = [1,2]
Output: false
```

## Constraints
- The number of nodes in the list is in the range [1, 105].
- 0 <= Node.val <= 9

## 簡而言之，它要的是
檢查一鏈結串列元素排列是否為回文

## 思路
依序將串列中的值取出放置於陣列中

定義左右指標，左1對右1，左2對右2，依序檢查陣列中元素是否相同，直到左右兩指標相會，表示已全數檢查完成，若檢查過程中有不相同元素則回傳false

全數檢查完則回傳true


## Follow up
Could you do it in O(n) time and O(1) space?

