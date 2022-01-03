# [203.remove-linked-list-elements](https://leetcode.com/problems/isomorphic-strings/)

### Category / Difficulty
algorithms / Easy

### Tags
hash-table
	 		
### Companies
linkedin

## Description
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:
```
Input: s = "egg", t = "add"
Output: true
```

Example 2:
```
Input: s = "foo", t = "bar"
Output: false
```

Example 3:
```
Input: s = "paper", t = "title"
Output: true
``` 
## Constraints
- 1 <= s.length <= 5 * 104
- t.length == s.length
- s and t consist of any valid ascii character.

## 簡而言之，它要的是
比對兩字串，檢查是否為同構字，若為同構字，表示這兩個字串的每個字皆可以相互對應

## 絲路
使用兩個map分別記錄兩個字串裡的字元，並依序編列index，s字串第一個字元index為0，第二個字元若與第一字元不相同，則其index為1，依此類推

若兩個字串出現的index皆相同，表示這兩個字串可以互相取代，為同構字
