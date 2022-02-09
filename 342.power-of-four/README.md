# [342.power-of-four](https://leetcode.com/problems/power-of-four/)

### Category / Difficulty
algorithms / Easy

### Tags
bit-manipulation
	 		
### Companies
twosigma

## Description

Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

 

Example 1:
```
Input: n = 16
Output: true
```

Example 2:
```
Input: n = 5
Output: false
```

Example 3:
```
Input: n = 1
Output: true
```

## Constraints
- -231 <= n <= 231 - 1

## 簡而言之，它要的是
檢查某數是否為4的n次方

## 絲路
依序除4，若最終為1表示其為4的次方
若小於1則表示非4的次方


## Follow up
Could you solve it without loops/recursion?

