# [3.longest-substring-without-repeating-characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)

### Category / Difficulty
algorithms / Medium

### Tags
hash-table | two-pointers | string | sliding-window
	 		
### Companies
adobe | amazon | bloomberg | yelp

## Description
Given a string s, find the length of the longest substring without repeating characters.

 
Example 1:
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

Example 2:
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```


Example 3:
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Constraints
- 0 <= s.length <= 5 * 104
- s consists of English letters, digits, symbols and spaces.

## 簡而言之，它要的是
找出字串中的最長子字串，子字串各自元不能重複


## 思路

由第一位字元開始依序跟第i+1位字元進行比對，若不重複則將子字串記錄下來，若當前子字串長度超越原始紀錄，則須將最長長度也記錄下來，最後將最長長度記錄輸出。

## 進階思路

