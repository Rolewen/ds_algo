# [344.reverse-string](https://leetcode.com/problems/reverse-string/)

### Category / Difficulty
algorithms / Easy

### Tags
two-pointers | string
	 		
### Companies
Unknown

## Description
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.


Example 1:
```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

Example 2:
```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```
 

## Constraints
- 1 <= s.length <= 105
- s[i] is a printable ascii character.

## 簡而言之，它要的是
陣列字串反轉

## 絲路
使用2 pointer,依序將第0位與第length-1位交換、第1位與第length-2位交換即可

