# [83.remove-duplicates-from-sorted-list](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

### Category / Difficulty
algorithms / Easy

### Tags
linked-list
	 		
### Companies
Unknown

## Description
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:
![](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg)
```
Input: head = [1,1,2]
Output: [1,2]
```

Example 2:
![](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg)
```
Input: head = [1,1,2,3,3]
Output: [1,2,3]
```


## Constraints
- The number of nodes in the list is in the range [0, 300].
- -100 <= Node.val <= 100
- The list is guaranteed to be sorted in ascending order.


## 簡而言之，它要的是

給予一個鏈結串列，移除裡面重複的數值，併回傳該鏈結串列

## 絲路

依序遍歷各個鏈結串列數值，若next node與當前node相符，則跳過下一個node(即刪除)


## 進階絲路

n/a
