# [125.valid-palindrome](https://leetcode.com/problems/valid-palindrome)

### Category / Difficulty
algorithms / Easy

### Tags
two-pointers | string
	 		
### Companies
facebook | microsoft | uber | zenefits

## Description
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

Example 2:
```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

Example 3:
```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

## Constraints
- 1 <= s.length <= 2 * 105
- s consists only of printable ASCII characters.

## 簡而言之，它要的是
移除字串中非英文與數字的字元，並檢查這字串是否為回文

## 絲路
將字串改為小寫
使用正則表達式移除非英數字的字元
新增一變數，紀錄反轉後的字串
將原先字串與反轉字串相比，若為相等表示為回文

