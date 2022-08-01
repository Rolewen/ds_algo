# [278.first-bad-version](https://leetcode.com/problems/first-bad-version/)

### Category / Difficulty
algorithms / Easy

### Tags
binary-search
	 		
### Companies
facebook

## Description

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:
```
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

Example 2:
```
Input: n = 1, bad = 1
Output: 1
```

## Constraints
- 1 <= bad <= n <= 231 - 1

## 簡而言之，它要的是
會給予一個數字，表示總共有多少版本
另外會給予一支api isBadVersion，這支API會回吐當前版本是否壞掉
透過以上資訊找出第一個壞掉的版本

## 思路
使用二分搜尋法，先從中間開始查找，若當前版本是壞掉的，則表示第一個壞掉的版本可能是目前版本或再更之前的版本，因此可將範圍縮小到1~當前版本(range=1~n/2)，並依序使用相同方式(二分搜尋)查找

若當前版本是好的，則表示壞掉的版本在後方，則可將範圍定義在(n/2+1 ~ n)，並依序使用相同方式(二分搜尋)查找


