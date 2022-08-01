# [190.reverse-bits](https://leetcode.com/problems/reverse-bits/)

### Category / Difficulty
algorithms / Easy

### Tags
bit-manipulation
	 		
### Companies
airbnb | apple

## Description
Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 

Example 1:
```
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
```

Example 2:
```
Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
```

## Constraints
- The input must be a binary string of length 32

## 簡而言之，它要的是
給予一32位元的正整數，反轉其整數的位元，並回傳結果值

## 思路
依序將整數中各個位數轉成二進位，並同時計算反轉值(假設當前為反轉前第0位bit，表示其為反轉後的第31位)

### Follow up
If this function is called many times, how would you optimize it?

