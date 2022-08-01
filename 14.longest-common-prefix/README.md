# [14.longest-common-prefix](https://leetcode.com/problems)

### Category / Difficulty
algorithms / Easy

### Tags
string
	 		
### Companies
yelp

## Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:
```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

Example 2:
```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```
 

## Constraints
- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lower-case English letters.

## 簡而言之，它要的是
查找陣列中每個字，共同且最長的prefix pattern，若沒有則回傳空字串

## 思路
條件裡面陣列長度可能為空，所以若沒有資料則直接回傳空字串

預設prefix為陣列中第一個字串

接著將prefix的每個字元依序跟每個字串中每個字元進行比對

若有字元不相等，則將其從prefix中移除


