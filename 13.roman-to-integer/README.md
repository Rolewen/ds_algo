# [13.roman-to-integer](https://leetcode.com/problems/roman-to-integer)

### Category / Difficulty
algorithms / Easy

### Tags
math | string
	 		
### Companies
bloomberg | facebook | microsoft | uber | yahoo

## Description
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:
```
Input: s = "III"
Output: 3
Explanation: III = 3.
```

Example 2:
```
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

Example 3:
```
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```
 
## Constraints
- 1 <= s.length <= 15
- s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
- It is guaranteed that s is a valid roman numeral in the range [1, 3999].


## 簡而言之，它要的是
給予羅馬數字將其轉回數字

## 絲路
IV，為4 => (-1+5)
VI，為6 => (5+1)
CM，為900 => (-100+1000)
XC，為90 => (-10+100)

可看出一個規則，當前數字若小於後面一位數字時，則當前數字要減，反之則要加

定義好羅馬數字的Symbol/Value Mapping表，按上述邏輯依序比對各個字並轉回數字進行加總即可



