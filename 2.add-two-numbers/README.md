# [1. Two Sum](https://leetcode.com/problems/add-two-numbers/)

|Category  |Difficulty     |Likes      |Dislikes   |
|----------|---------------|-----------|-----------|
|algorithms|Medium (37.33%)|15072      |3283       |

### Tags
linked-list | math
	 		
### Companies
adobe | airbnb | amazon | bloomberg | microsoft

## Description

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
![image info](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

Example 2:
```
Input: l1 = [0], l2 = [0]
Output: [0]
```

Example 3:
```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```


## Constraints

- The number of nodes in each linked list is in the range [1, 100].
- 0 <= Node.val <= 9
- It is guaranteed that the list represents a number that does not have leading zeros.


## 簡而言之，它要的是

給予兩個鏈結串列，串列中每個node皆為一個數字，分別為個位、百位、千位數等，請加總這兩個鏈結串列數字，並用一個新的鏈結串列回傳結果值

## 絲路

當l1,l2不為null或carry不為0(有需要進位的數)，則表示尚未計算完畢

若l1不為空，則表示l1當前有數值需要列入加總，並將l1的pointer指向l1.next

若l2不為空，則表示l1當前有數值需要列入加總，並將l2的pointer指向l2.next

若有carry值，則表示carry需要列入加總

於result(結果鏈結串列)中新增一個node，數值為目前加總值的個位數

若加總出來的數值>9，表示需要進位，則須將carry改為1，否則為0

將result(結果鏈結串列)的pointer指向result.next


## 進階絲路

尚無更好的解法

