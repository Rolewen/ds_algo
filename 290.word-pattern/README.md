# [290.word-pattern](https://leetcode.com/problems/word-pattern/)

### Category / Difficulty
algorithms / Easy

### Tags
hash-table
	 		
### Companies
dropbox | uber

## Description
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:
```
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
```

Example 2:
```
Input: pattern = "abba", s = "dog cat cat fish"
Output: false
```

Example 3:
```
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
```

## Constraints
- 1 <= pattern.length <= 300
- pattern contains only lower-case English letters.
- 1 <= s.length <= 3000
- s contains only lowercase English letters and spaces ' '.
- s does not contain any leading or trailing spaces.
- All the words in s are separated by a single space.

## 簡而言之，它要的是
檢查字串是否與pattern是雙射關係

例如 'abba' 與 'dog cat cat dog'
a可完全對應到dog
b可完全對應到cat

且pattern的順序與字串順序皆相同，因此這個範例中字串跟pattern是雙射關係

## 思路
使用mapping表給予字串和pattern中不同字元/單字一個數值

例如會給數值1代表pattern中的a, 也代表字串中的dog

當所有 字元/單字 數值相等時即表示這組pattern和字串是bijection
