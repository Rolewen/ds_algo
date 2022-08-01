# [263.ugly-number](https://leetcode.com/problems/ugly-number/)

### Category / Difficulty
algorithms / Easy

### Tags
math
	 		
### Companies
Unknown

## Description
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.

 

Example 1:
```
Input: n = 6
Output: true
Explanation: 6 = 2 × 3
```

Example 2:
```
Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
```

Example 3:
```
Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.
```

## Constraints
- -231 <= n <= 231 - 1

## 簡而言之，它要的是
檢查一數字其因式分解後，是否只含有2,3,5這幾個因子，若是則表示為ugly number

## 思路
因ugly number是一個positive integer，因此若n為負數表示一定不是ugly number，可以直接排除
另外1沒有任何的因子，所以題目有說明其為ugly number，若n為1也可直接判定為true

其餘數字則依序除掉2, 3, 5，並將除完後的n再用餘數檢查，是否可以被2,3,5其中一數整除，若是則表示為ugly number
