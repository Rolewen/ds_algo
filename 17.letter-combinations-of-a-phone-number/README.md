# [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

### Category / Difficulty
algorithms / Medium

### Tags
string | backtracking
	 		
### Companies
amazon | dropbox | facebook | google | uber

## Description

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![image info](./img/e1.png)

Example 1:
```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

Example 2:
```
Input: digits = ""
Output: []
```

Example 3:
```
Input: digits = "2"
Output: ["a","b","c"]
```

## Constraints
- 0 <= digits.length <= 4
- digits[i] is a digit in the range ['2', '9'].

## 簡而言之，它要的是
找出輸入號碼對應的字串，所有排列組合的結果

## 思路
定義數字跟字串的對應表

假設輸入為23，對應的pattern為['abc','def']

此處可使用遞迴解

第一次拿a(i=0, s="a")，後續項目(i=i+1, "a"+"current char")依序遞迴進行字串組合，直到目前字串長度跟digits相同，則將字串塞入結果陣列，並回傳，終止遞迴。

第二次拿b(i=1, s="b")，後續項目(i=i+1, "b"+"current char")依序遞迴進行字串組合，直到目前字串長度跟digits相同，則將字串塞入結果陣列，並回傳，終止遞迴。

...依此類推
