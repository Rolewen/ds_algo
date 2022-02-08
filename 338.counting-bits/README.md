# [338.counting-bits](https://leetcode.com/problems/counting-bits/)

### Category / Difficulty
algorithms / Easy

### Tags
dynamic-programming | bit-manipulation
	 		
### Companies
Unknown

## Description
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:
```
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
```

Example 2:
```
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```

## Constraints
- 0 <= n <= 105

## 簡而言之，它要的是
給予一index，計算由0~該index，每個index轉為2進位後，有多少個1

假設i為5，則

i=0, 二進制是0, 共有0個1
i=1, 二進制是1, 共有1個1
i=2, 二進制是10, 共有1個1
i=3, 二進制是11, 共有2個1
i=4, 二進制是100, 共有1個1
i=5, 二進制是101, 共有2個1

回傳[0,1,1,2,1,2]


## 絲路
依序計算各index數值轉為二進制後有多少個1(使用%方式可求得)，若為1則記錄下來，非1則繼續往下一位數檢查，直到全數檢查完畢，再往下一個index繼續此步驟


## Follow up
- It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
- Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

