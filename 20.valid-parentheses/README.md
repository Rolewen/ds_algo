# [](https://leetcode.com/problems)

### Category / Difficulty
algorithms / Easy

### Tags
string | stack
	 		
### Companies
airbnb | amazon | bloomberg | facebook | google | microsoft | twitter | zenefits

## Description
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:
```
Input: s = "()"
Output: true
```

Example 2:
```
Input: s = "()[]{}"
Output: true
```

Example 3:
```
Input: s = "(]"
Output: false
```

## Constraints
- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'.

## 簡而言之，它要的是
檢查給予的左右小括弧、中括弧、大括弧是否有成對

## 絲路
定義一stack，若為左括弧，則放入stack中
若為右括弧，則檢查stack中最後一位有無與自己成對
若不是則表示這字串的括弧順序不對，回傳false

