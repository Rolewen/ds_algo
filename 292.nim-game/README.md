# [292.nim-game](https://leetcode.com/problems/nim-game/)

### Category / Difficulty
algorithms / Easy

### Tags
brainteaser | minimax
	 		
### Companies
adobe

## Description
You are playing the following Nim Game with your friend:

Initially, there is a heap of stones on the table.
You and your friend will alternate taking turns, and you go first.
On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
The one who removes the last stone is the winner.
Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

 

Example 1:
```
Input: n = 4
Output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.
```

Example 2:
```
Input: n = 1
Output: true
```

Example 3:
```
Input: n = 2
Output: true
```

## Constraints
- 1 <= n <= 231 - 1

## 簡而言之，它要的是
拿石頭的遊戲，總共會有n顆石頭，每個人一次可以拿1~3顆石頭，拿到最後一顆石頭的人獲勝，由自己先行

## 思路
因為是自己先拿，n如果是小於3顆就必定獲勝
若是5~7顆
5顆時，先拿走1顆，剩4顆，對方不管怎樣都輸
6顆時，先拿走2顆，剩4顆，對方不管怎樣都輸
7顆時，先拿走3顆，剩4顆，對方不管怎樣都輸
8顆時，對方只要拿到剩4顆，我方不管怎樣都輸
顆數為12, 16, 20...皆會輸

由此可推斷出，若是4的倍數就必定會輸

