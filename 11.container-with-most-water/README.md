# [](https://leetcode.com/problems)

### Category / Difficulty
algorithms / Medium

### Tags
array | two-pointers
	 		
### Companies
bloomberg

## Description
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
![image info](./img/e1.jpeg)

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

Example 2:
```
Input: height = [1,1]
Output: 1
```

## Constraints
- n == height.length
- 2 <= n <= 105
- 0 <= height[i] <= 104

## 簡而言之，它要的是
圖表中每條線可以想成是容器的壁高，要找出可以納入最多蓄水量的容器，並回吐最大的蓄水量

## 思路
- 使用two pointer，由左右兩端依序查找。
- 每次迴圈檢查需計算出目前容器的蓄水量，以及是否有比最大蓄水量大，若有，則將最大蓄水量改為當前容器的蓄水量。
- 接著往內側縮小面積，左右兩側壁高較矮的移動就好，因為容器面積會因為壁高小而蓄水量少，所以可以再找看看有沒有更高的壁高，容納更多水量。