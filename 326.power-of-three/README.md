# [326.power-of-three](https://leetcode.com/problems/power-of-three/)

### Category / Difficulty
algorithms / Easy

### Tags
math
	 		
### Companies
google

## Description
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:
```
Input: n = 27
Output: true
```

Example 2:
```
Input: n = 0
Output: false
```

Example 3:
```
Input: n = 9
Output: true
```

## Constraints
- -231 <= n <= 231 - 1

## 簡而言之，它要的是
檢查一數字是否為3的次方值

## 思路
依序將該數值除以3，若該數最終等於3表示其為3的次方值，若該數小於3表示非3的次方

## Follow up: Could you solve it without loops/recursion?

