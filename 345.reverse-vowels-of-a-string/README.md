# [345.reverse-vowels-of-a-string](https://leetcode.com/problems/reverse-vowels-of-a-string/)

### Category / Difficulty
algorithms / Easy

### Tags
two-pointers | string
	 		
### Companies
google

## Description
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

Example 1:
```
Input: s = "hello"
Output: "holle"
```

Example 2:
```
Input: s = "leetcode"
Output: "leotcede"
```
 

## Constraints
- 1 <= s.length <= 3 * 105
- s consist of printable ASCII characters.

## 簡而言之，它要的是
反轉母音字母
從左邊數來第1個字母要與右邊數來第1個字母做交換
從左邊數來第2個字母要與右邊數來第2個字母做交換
依此類推

## 絲路
使用雙指標，若當前指標字元不是字母，則將該指標往下一位移動，直到找到字母或與對向指標交會(表示全部反轉完畢)


