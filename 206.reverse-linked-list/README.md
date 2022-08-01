# [206.reverse-linked-list](https://leetcode.com/problems/reverse-linked-list/)

### Category / Difficulty
algorithms / Easy

### Tags
linked-list
	 		
### Companies
adobe | amazon | apple | bloomberg | facebook | microsoft | snapchat | twitter | uber | yahoo | yelp | zenefits

## Description
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

![image info](./img/206e1.jpg)
```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

Example 2:

![image info](./img/206e2.jpg)
```
Input: head = [1,2]
Output: [2,1]
```

Example 3:
```
Input: head = []
Output: []
```


## Constraints
- The number of nodes in the list is the range [0, 5000].
- -5000 <= Node.val <= 5000


## 簡而言之，它要的是
反轉鏈結串列

## 思路
使用tmp, curr, next，來操作以及定位當前node與下一個node

curr:指向當前要被串接的node
next:指向下一個要被反轉串接的node
res:已經串接好的反轉串列

1. 將當前node指標切換至下一節點
2. 原先紀錄的下一節點指標要變成記錄下下個節點
3. 將當前node的next指標指向已經串接好的鏈結串列，當前node就會變成反轉好的鏈結串列的head
4. 若下一個節點指標已經不存在，表示全數反轉完畢



## Follow up
A linked list can be reversed either iteratively or recursively. Could you implement both?


## 進階思路

