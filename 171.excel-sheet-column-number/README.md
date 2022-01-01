# [171.excel-sheet-column-number](https://leetcode.com/problems/excel-sheet-column-number/)

### Category / Difficulty
algorithms / Easy

### Tags
math
	 		
### Companies
microsoft | uber

## Description

Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:
```
Input: columnTitle = "A"
Output: 1
```

Example 2:
```
Input: columnTitle = "AB"
Output: 28
```

Example 3:
```
Input: columnTitle = "ZY"
Output: 701
```

## Constraints
- 1 <= columnTitle.length <= 7
- columnTitle consists only of uppercase English letters.
- columnTitle is in the range ["A", "FXSHRXW"].

## 簡而言之，它要的是
給予欄位title，回推出欄位數字

## 絲路
依序拆解個個位數的字元
並使用一變數紀錄當前為26的第幾次方(最右字元為26的0次方, 右2為26的1次方..依此類推)
AA=> 1*26**1 + 1 * 26 ** 0
AB=> 1*26**1 + 2 * 26 ** 0

依序將數值加總即為結果值